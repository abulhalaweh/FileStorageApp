using FileStorage.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;

namespace FileStorage.Server.Models.IdentityModels
{
    public class ApplicationUser : IdentityUser
    {
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public int? Age { get; set; }
        public DateTime RegistryDate { get; private set; }
        public ICollection<FileDB> UserFiles { get; set; }

        public ApplicationUser() {}

        public ApplicationUser(string username)
        {
            UserName = username;
            RegistryDate = DateTime.Now;
        }
    }
}