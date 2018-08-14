using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AspNet.Security.OpenIdConnect.Extensions;
using AspNet.Security.OpenIdConnect.Primitives;
using AspNet.Security.OpenIdConnect.Server;
using Google.Apis.Auth;
using FileStorage.Server.Filters;
using FileStorage.Server.Models.IdentityModels;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using OpenIddict.Abstractions;
using OpenIddict.Core;
using OpenIddict.Server;

namespace FileStorage.Controllers
{
    [Route("api/[controller]")]
    public class AuthorizationController : Controller
    {
        private readonly IOptions<IdentityOptions> _identityOptions;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly UserManager<ApplicationUser> _userManager;

        public AuthorizationController(
            IOptions<IdentityOptions> identityOptions,
            SignInManager<ApplicationUser> signInManager,
            UserManager<ApplicationUser> userManager)
        {
            _identityOptions = identityOptions;
            _signInManager = signInManager;
            _userManager = userManager;
        }

        [HttpPost("~/connect/token"), Produces("application/json")]
        public async Task<IActionResult> Exchange(OpenIdConnectRequest request)
        {
            if (request.IsPasswordGrantType())
            {
                return await PasswordGrantRequest(request);
            }
            else if (request.IsRefreshTokenGrantType())
            {
                return await RefreshGrantRequest(request);
            }
            else if (request.IsAuthorizationCodeGrantType())
            {
                return await AuthorizationGrantRequest(request);
            }
            else
            {
                return BadRequest(new OpenIdConnectResponse
                {
                    Error = OpenIdConnectConstants.Errors.UnsupportedGrantType,
                    ErrorDescription = "The specified grant type is not supported."
                });
            }
        }

        [HttpGet("~/external/authorize")]
        public async Task<IActionResult> ExternalAuthorize(OpenIdConnectRequest request)
        {
            try
            {
                string id_token = request["id_token"].ToString();
                bool registerAsDoctor = (bool)request["registerAsDoctor"];
                var validationRes = await Google.Apis.Auth.GoogleJsonWebSignature.ValidateAsync(id_token);
                var user = await _userManager.FindByLoginAsync("Google", validationRes.Subject);
                AuthenticationTicket ticket;

                if (user == null)
                {
                    var email = validationRes.Email;
                    //user = (registerAsDoctor) ? (ApplicationUser)
                    //    new Doctor(email) : new Patient(email);
                    user = new ApplicationUser(email);

                    var  accountCreateRes = await _userManager.CreateAsync(user);
                   
                    if (accountCreateRes.Succeeded)
                    {
                        user.FirstName = validationRes.GivenName;
                        user.LastName = validationRes.FamilyName;
                        user.EmailConfirmed = validationRes.EmailVerified;
                       
                        var userInfo = new UserLoginInfo("Google", validationRes.Subject, "");
                        var logRes = await _userManager.AddLoginAsync(user, userInfo);

                        if (logRes.Succeeded)
                        {
                            var roleRes = await _userManager.AddToRoleAsync(user, (registerAsDoctor) ? "Doctor" : "Patient");
                            if(roleRes.Succeeded)
                            {
                                ticket = await CreateTicketAsync(request, user);
                                return SignIn(ticket.Principal, ticket.Properties, ticket.AuthenticationScheme);
                            }
                            else return BadRequest(new ValidationError("Unexpected error", 
                            "Failed adding to such a role"));
                        }
                    }
                    else
                    {
                        return BadRequest(new ValidationError("email", 
                        "A user with such an email already exists."));
                    }
                }

                ticket = await CreateTicketAsync(request, user);
                return SignIn(ticket.Principal, ticket.Properties, ticket.AuthenticationScheme);
            }
            catch(InvalidJwtException)
            {
                return BadRequest(new ValidationError("server", 
                "The account has not been confirmied, try later, please."));
            }
        }

        private async Task<IActionResult> PasswordGrantRequest(OpenIdConnectRequest request) 
        {
            var user = await _userManager.FindByNameAsync(request.Username);
            if (user == null)
            {
                return BadRequest(new ValidationError("email", 
                "There is no such a user."));
            }

            if (_userManager.SupportsUserLockout && await _userManager.IsLockedOutAsync(user))
            {
                return BadRequest(new ValidationError("lockout error", 
                "You've exceeded access attempts, try in 5 minutes, please."));
            }

            var result = await _signInManager.CheckPasswordSignInAsync(user, request.Password, lockoutOnFailure: true);
            if (!result.Succeeded)
            {
                return BadRequest(new ValidationError("password", 
                "The password is invalid, please try again later."));
            }

            var ticket = await CreateTicketAsync(request, user);
            return SignIn(ticket.Principal, ticket.Properties, ticket.AuthenticationScheme);
        }

        private async Task<IActionResult> RefreshGrantRequest(OpenIdConnectRequest request) 
        {
            var info = await HttpContext.AuthenticateAsync(OpenIdConnectServerDefaults.AuthenticationScheme);
            // invalidate the refresh token when the user password/roles change
            // var user = await _signInManager.ValidateSecurityStampAsync(info.Principal);
            var user = await _userManager.GetUserAsync(info.Principal);

            if (user == null)
            {
                return BadRequest(new ValidationError("Invalid token", 
                "The refresh token is no longer valid."));
            }
            else if (!await _signInManager.CanSignInAsync(user))
            {
                return BadRequest(new ValidationError("Sign-in error", 
                "The user is no longer allowed to sign in."));
            }
            else
            {
                var ticket = await CreateTicketAsync(request, user, info.Properties);
                return SignIn(ticket.Principal, ticket.Properties, ticket.AuthenticationScheme);
            }
        }

        private async Task<IActionResult> AuthorizationGrantRequest(OpenIdConnectRequest request)
        {
            var info = await HttpContext.AuthenticateAsync(OpenIddictServerDefaults.AuthenticationScheme);
            // invalidate the refresh token when the user password/roles change
            // var user = _signInManager.ValidateSecurityStampAsync(info.Principal);
            var user = await _userManager.GetUserAsync(info.Principal);

            if (user == null)
            {
                return BadRequest(new ValidationError("server", 
                "The authorization code is no longer valid."));
            } else if (!await _signInManager.CanSignInAsync(user))
            {
                return BadRequest(new ValidationError("Sign-in error", 
                "The user is no longer allowed to sign in."));
            }

            var ticket = await CreateTicketAsync(request, user, info.Properties);
            return SignIn(ticket.Principal, ticket.Properties, ticket.AuthenticationScheme);
        }

        private async Task<AuthenticationTicket> CreateTicketAsync(OpenIdConnectRequest request, 
                                                        ApplicationUser user, 
                                                        AuthenticationProperties properties = null)
        {
            var principal = await _signInManager.CreateUserPrincipalAsync(user);
            var ticket = new AuthenticationTicket(
                principal, 
                properties,
                OpenIdConnectServerDefaults.AuthenticationScheme
            );

            if (!request.IsRefreshTokenGrantType())
            {
                ticket.SetScopes(new[]
                {
                    OpenIdConnectConstants.Scopes.OpenId,
                    OpenIdConnectConstants.Scopes.Profile,
                    OpenIdConnectConstants.Scopes.OfflineAccess,
                    OpenIddictConstants.Scopes.Roles
                }.Intersect( GetScopes(request) ));
            }

            ticket.SetResources("resource_server");

            foreach (var claim in ticket.Principal.Claims)
            {
                if (claim.Type != _identityOptions.Value.ClaimsIdentity.SecurityStampClaimType)
                {
                    var destinations = new List<string>
                    {
                        OpenIdConnectConstants.Destinations.AccessToken
                    };

                    if ((claim.Type == OpenIdConnectConstants.Claims.Username && ticket.HasScope(OpenIdConnectConstants.Scopes.Profile)) ||
                        (claim.Type == OpenIdConnectConstants.Claims.Role && ticket.HasScope(OpenIddictConstants.Claims.Roles)))
                    {
                        destinations.Add(OpenIdConnectConstants.Destinations.IdentityToken);
                    }

                    claim.SetDestinations(destinations);
                }
            }

            return ticket;
        }

        private IEnumerable<string> GetScopes(OpenIdConnectRequest request)
        {
            var scope = request.GetParameter("scopes");
            return scope != null ? 
            scope.Value.ToString().Split(' ') :
            Enumerable.Empty<string>();
        }
    }
}