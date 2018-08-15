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
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using FileStorage.Server.Models;
using FileStorage.Models;
using System.IO;
using System.Net.Http.Headers;

namespace FileStorage.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = OpenIddictValidationDefaults.AuthenticationScheme)]
    public class FileDBsController : Controller
    {
        private readonly FileStorageContext _context;

        public FileDBsController(FileStorageContext context)
        {
            _context = context;
        }

        [HttpGet("getAllFiles")]
        public async Task<IEnumerable<FileDTO>> FindAllFiles()
        {
            var filesDb = await _context.FilesDB.ToListAsync();
            var filesDto = MappingHelper.MapCollectionModels<FileDB, FileDTO>(filesDb);
            return filesDto;
        }

        [HttpGet("getUserFiles")]
        public async Task<IEnumerable<FileDTO>> FindUserFiles()
        {
            var user = await GetCurrentUser();
            return MappingHelper.MapCollectionModels<FileDB, FileDTO>(user.UserFiles);
        }

        [HttpPost("addFile")]
        public async Task<IActionResult> AddFile(FileDTO dto)
        {
            var user = await GetCurrentUser();
            var fileExists = false; //if need to prevent same file to upload twice
            if (!fileExists)
            {


                if (UploadFile())
                {
                    user.UserFiles.Add(new FileDB() { FileName = dto.FileName, FilePath = dto.FilePath, FileSize = dto.FileSize, UploadDate = dto.UploadDate, CreatedBy = user });
                    int returnValue = _context.SaveChanges();

                    return Ok();
                }
                else
                    return new ContentResult() { Content = "Such path not found!", StatusCode = 404 };
            }
            return new ContentResult() { Content = "Such a user is already added!", StatusCode = 403 };
        }

        private bool UploadFile()
        {
            try
            {
                var file = Request.Form.Files[0];
                string folderName = "Upload";
                string webRootPath = "Client/uploadedFiles";// _hostingEnvironment.WebRootPath;
                string newPath = Path.Combine(webRootPath, folderName);
                if (!Directory.Exists(newPath))
                {
                    Directory.CreateDirectory(newPath);
                }
                if (file.Length > 0)
                {
                    string fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    string fullPath = Path.Combine(newPath, fileName);
                    using (var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                }
                return true; // Json("Upload Successful.");
            }
            catch (System.Exception ex)
            {
                return false; // Json("Upload Failed: " + ex.Message);
            }
        }

        [HttpPost("deleteFile")]
        public async Task<IActionResult> DeleteFile(FileDTO dto)
        {
            var user = await GetCurrentUser();

            if (user != null)
            {
                var file = await _context.FilesDB.Where(f => f.FileId == dto.FileId).FirstOrDefaultAsync();

                user.UserFiles.Remove(file);
                _context.SaveChanges();
                return Ok();
            }
            return new ContentResult() { Content = "There is no such a file to delete!", StatusCode = 403 };
        }

        [HttpPut("{id}")]
        [Route("updateFile")]
        public async Task<IActionResult> Update(long id, [FromBody] FileDTO dto)
        {
            // set bad request if contact data is not provided in body
            if (dto == null || id == 0)
            {
                return BadRequest();
            }

            var user = await GetCurrentUser();

            var file = await _context.FilesDB.Where(f => f.FileId == dto.FileId && f.CreatedByID == user.Id).FirstOrDefaultAsync();
            if (file == null)
            {
                return NotFound();
            }

            file.FileName = dto.FileName;
            file.FilePath = dto.FilePath;
            file.FileSize = dto.FileSize;

            _context.FilesDB.Update(file);
            _context.SaveChanges();
            return Ok(new { message = "file is updated successfully." });
        }

        private async Task<ApplicationUser> GetCurrentUser()
        {
            var id = User.GetClaim(OpenIdConnectConstants.Claims.Subject);
            return await _context.Users.FirstOrDefaultAsync(p => p.Id == id);

        }
    }
}
