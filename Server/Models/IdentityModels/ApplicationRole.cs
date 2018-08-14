using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace FileStorage.Server.Models.IdentityModels
{
    public class ApplicationRole : IdentityRole<string>
    {
        [StringLength(250)]
        public string Description { get; set; }
        
    }
}