using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using AspNet.Security.OpenIdConnect.Extensions;
using AspNet.Security.OpenIdConnect.Primitives;
using AspNetCoreSpa.Server;
using AspNetCoreSpa.Server.Helpers;
using AspNetCoreSpa.Server.Hubs;
using FileStorage.Server.Filters;
using FileStorage.Server.Helpers;
using FileStorage.Server.Models.AccountVModels;
using FileStorage.Server.Models.IdentityModels;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using OpenIddict.Validation;

namespace FileStorage.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IHubContext<ConnectionHub> _dataHub;

        public AccountController(
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            IHubContext<ConnectionHub> dataHub)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _dataHub = dataHub;
        }

        [HttpPost("register")]
        [AllowAnonymous]
        public async Task<IActionResult> Register([FromBody]RegisterVModel model, string returnUrl = null)
        {
            var user = new ApplicationUser(model.Email);
            var result = await _userManager.CreateAsync(user, model.Password);

            if (result.Succeeded)
            {
                user.FirstName = model.FirstName;
                user.LastName = model.LastName;

                //var role = "Admin"; // model.RegisterAsDoctor ? "Doctor" : "Patient";
                var role = model.RegisterAsDoctor ? "Doctor" : "Patient";
                var roleAddResult = await _userManager.AddToRoleAsync(user, role);
                
                if (roleAddResult.Succeeded)
                {
                    await _signInManager.SignInAsync(user, isPersistent: false);
                    await _dataHub.NotifyClients(user, role, model.RegisterAsDoctor);
                    return Ok();
                }
                else return BadRequest(new ValidationError("Unexpected error", "Failed adding to such a role"));
            }
            AddErrors(result);

            return BadRequest(new ApiError(ModelState));
        }

        [HttpGet("checkUser")]
        [AllowAnonymous]
        public async Task<JsonResult> CheckUsername([FromQuery]EmailVModel model)
        {
            return Json
            (
                await _userManager.FindByNameAsync(model.Email) != null
            );
        }

        #region Helpers

        private void AddErrors(IdentityResult result)
        {
            foreach (var error in result.Errors)
            {
                if(error.Code.Contains("DuplicateUserName")) {
                    var desc = error.Description.Replace("User name", "Email");
                    ModelState.AddModelError("email", desc);
                }
                else ModelState.AddModelError(error.Code, error.Description);
            }
        }

        #endregion
    }
}
