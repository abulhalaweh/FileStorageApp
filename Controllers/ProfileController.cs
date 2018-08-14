using System;
using AspNet.Security.OpenIdConnect.Extensions;
using AspNet.Security.OpenIdConnect.Primitives;
using FileStorage.Server.Data;
using FileStorage.Server.Models.IdentityModels;
using FileStorage.Server.Models.UserVModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using OpenIddict.Validation;
using FileStorage.Server.Helpers;
using AspNetCoreSpa.Server;
using FileStorage.Server.Filters;

namespace FileStorage.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = OpenIddictValidationDefaults.AuthenticationScheme)] 
    public class ProfileController: Controller
    {
        private readonly FileStorageContext _context;

        public ProfileController(FileStorageContext context)
        {
            _context = context;
        }

        [HttpGet("info")]
        public async Task<object> Info()
        {
            var user = await GetCurrentUser();
            var userModel = MappingHelper.CreateUserVModel(User.GetClaim(OpenIdConnectConstants.Claims.Role));
            MappingHelper.MapModels(user, userModel);
            return userModel;
        }

        [HttpPost("editProfile")]
        public async Task<ActionResult> Info(GeneralUserModel userModel)
        {
            var user = await GetCurrentUser();
            MappingHelper.MapModels(userModel, user);
            _context.Update(user);
            _context.SaveChanges();
            return Ok();
        }

        private dynamic GetCurrentUser()
        {
            var role = User.GetClaim(OpenIdConnectConstants.Claims.Role);
            var id = User.GetClaim(OpenIdConnectConstants.Claims.Subject);
            var user = MappingHelper.CreateUserEntity(role);
            return FindUser(user, id);
        }

        private async Task<dynamic> FindUser<T>(T user, string id) where T: class
        {
            return await _context.Set<T>().FindAsync(id);
        }
    }
}