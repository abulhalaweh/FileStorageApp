using System;
using System.Threading.Tasks;
using AspNet.Security.OpenIdConnect.Primitives;
using FileStorage.Server.Data;
using FileStorage.Server.Models.IdentityModels;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using OpenIddict.Validation;

namespace FileStorage.Server.Extensions
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddCustomIdentity(this IServiceCollection services)
        {
             services.AddIdentity<ApplicationUser, ApplicationRole>(options => 
            {
                options.Password.RequireDigit = false;
                options.Password.RequiredLength = 6;
                options.Password.RequireLowercase = false;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = false;

                options.User.RequireUniqueEmail = false;

                options.Lockout.MaxFailedAccessAttempts = 5;
                options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(5);

                options.ClaimsIdentity.UserNameClaimType = OpenIdConnectConstants.Claims.Username;
                options.ClaimsIdentity.UserIdClaimType = OpenIdConnectConstants.Claims.Subject;
                options.ClaimsIdentity.RoleClaimType = OpenIdConnectConstants.Claims.Role;
            })
            .AddEntityFrameworkStores<FileStorageContext>()
            .AddDefaultTokenProviders();

            return services;
        }
        
        public static IServiceCollection AddCustomOpenIddict(this IServiceCollection services, 
                                                                  IHostingEnvironment env)
        {
            services.AddOpenIddict()
            .AddCore(options =>
            {
                options.UseEntityFrameworkCore()
                        .UseDbContext<FileStorageContext>();
            })
            .AddServer(options =>
             {
                 options.UseMvc();
                 options.EnableTokenEndpoint("/connect/token");
                 options.EnableAuthorizationEndpoint("/external/authorize");
                 options.AllowPasswordFlow()
                        .AllowRefreshTokenFlow()
                        .AllowAuthorizationCodeFlow();

                 options.SetAccessTokenLifetime(TimeSpan.FromMinutes(10));
                 options.SetIdentityTokenLifetime(TimeSpan.FromMinutes(10));
                 options.SetRefreshTokenLifetime(TimeSpan.FromMinutes(60));

                 if (env.IsDevelopment())
                 {
                     options.DisableHttpsRequirement();
                 }

                 options.AddEphemeralSigningKey();
             });

            services.AddAuthentication(options =>
            {
                options.DefaultScheme = OpenIddictValidationDefaults.AuthenticationScheme;
            })
            .AddOAuthValidation(options =>
            {
                options.Events.OnRetrieveToken = context =>
                {
                    context.Token = context.Request.Query["access_token"];
                    return Task.CompletedTask;
                };
            })
            .AddGoogle(options =>
            {
                options.ClientId = Startup.Configuration["Authentication:Google:ClientId"];
                options.ClientSecret = Startup.Configuration["Authentication:Google:ClientSecret"];
            });

            return services;
        }
    }
}