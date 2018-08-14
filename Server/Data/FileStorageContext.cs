using System;
using FileStorage.Server.Models;
using FileStorage.Server.Models.IdentityModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Reflection;
using FileStorage.Models;

namespace FileStorage.Server.Data
{
    public class FileStorageContext : IdentityDbContext<ApplicationUser>
    {
        public FileStorageContext(DbContextOptions<FileStorageContext> options)
            : base(options) {}

        public new DbSet<ApplicationUser> Users { get; set; }
        public new DbSet<ApplicationRole> Roles { get; set; }
        public DbSet<FileDB>  FilesDB { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
             base.OnModelCreating(builder);

             builder.Entity<ApplicationUser>()
                    .ToTable("Users") 
                    .Ignore(u => u.PhoneNumber)
                    .Ignore(u => u.PhoneNumberConfirmed)
                    .Ignore(u => u.TwoFactorEnabled)
                    .Ignore(u => u.Email)
                    .Ignore(u => u.NormalizedEmail);
            
            builder.Ignore<IdentityRole>();


            builder.Entity<IdentityUserClaim<string>>().ToTable("UserClaims");
            builder.Entity<IdentityUserRole<string>>().ToTable("UserRoles");
            builder.Entity<IdentityUserLogin<string>>().ToTable("UserLogins");
            builder.Entity<IdentityRoleClaim<string>>().ToTable("RoleClaims");
            builder.Entity<IdentityUserToken<string>>().ToTable("UserTokens");
        }
    }
}