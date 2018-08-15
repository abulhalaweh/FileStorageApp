using System;
using System.Collections.Generic;
using System.Linq;
using FileStorage.Server.Data;
using FileStorage.Server.Models.IdentityModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;

namespace FileStorage.Server
{
    public class IdentityDbInitilizer
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<ApplicationRole> _roleManager;
        private readonly FileStorageContext _context;

        public IdentityDbInitilizer(FileStorageContext context, IServiceProvider provider)
        {
            _roleManager = provider.GetService<RoleManager<ApplicationRole>>();
            _userManager = provider.GetService<UserManager<ApplicationUser>>();
            _context = context;
            Init();
        }

        private void Init()
        {
            CreateRoles();
            CreateUsers();
        }

        private void CreateRoles()
        {
            var roles = new List<ApplicationRole>()
            {
                new ApplicationRole { Name = "Admin", Description = "Unlimited access"},
                new ApplicationRole { Name = "General", Description = "Permission to create and manage files"},
            };

            foreach (var role in roles.Where(r => !_roleManager.RoleExistsAsync(r.Name).Result))
            {
                _roleManager.CreateAsync(role).GetAwaiter().GetResult();
            }
        }

        private void CreateUsers()
        {
            if (!_context.Users.Any())
            {
                var newUser = new ApplicationUser("admin@gmail.com") 
                { 
                    FirstName = "Alex", 
                    LastName = "Vagner",
                    LockoutEnabled = false 
                };
                _userManager.CreateAsync(newUser, "password").GetAwaiter().GetResult();
                _userManager.AddToRoleAsync(newUser, "Admin").GetAwaiter().GetResult();
            }
        }
    }
}