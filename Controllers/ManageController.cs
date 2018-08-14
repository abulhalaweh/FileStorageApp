using System.Threading.Tasks;
using AspNet.Security.OpenIdConnect.Extensions;
using AspNet.Security.OpenIdConnect.Primitives;
using FileStorage.Server.Data;
using FileStorage.Server.Filters;
using FileStorage.Server.Models.AccountVModels;
using FileStorage.Server.Models.IdentityModels;
using FileStorage.Server.Models.ManageVModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using OpenIddict.Validation;

namespace FileStorage.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = OpenIddictValidationDefaults.AuthenticationScheme)]
    public class ManageController: Controller
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;

        public ManageController(
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [HttpPost("changeLogin")]
        public async Task<IActionResult> ChangeLogin(EmailVModel model)
        {
            var id = User.GetClaim(OpenIdConnectConstants.Claims.Subject);
            var user = await _userManager.FindByIdAsync(id);
            user.UserName = model.Email;
            var result = await _userManager.UpdateAsync(user);

            if (result.Succeeded)
            {
                return Ok();
            }

            AddErrors(result);
            return BadRequest(new ApiError(ModelState));
        }

        [HttpPost("changePassword")]
        public async Task<ActionResult> ChangePassword(ChangePasswordVModel model)
        {
            var id = User.GetClaim(OpenIdConnectConstants.Claims.Subject);
             var user = await _userManager.FindByIdAsync(id);
            var result = await _userManager.ChangePasswordAsync(user, model.CurrentPassword, model.NewPassword);
            if (result.Succeeded)
            {
                 return Ok();
            }

            AddErrors(result);   
            return BadRequest(new ApiError(ModelState));
        }

        private void AddErrors(IdentityResult result)
        {
            foreach (var error in result.Errors)
            {
                if(error.Code.Contains("PasswordMismatch")) {
                    ModelState.AddModelError("CurrentPassword", error.Description);
                }
                else ModelState.AddModelError(error.Code, error.Description);
            }
        }
    }
}