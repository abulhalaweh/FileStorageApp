using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AspNet.Security.OAuth.Validation;
using AspNetCoreSpa.Server;
using AspNetCoreSpa.Server.Hubs;
using FileStorage.Server.Data;
using FileStorage.Server.Extensions;
using FileStorage.Server.Filters;
using FileStorage.Server.Models.IdentityModels;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Cors.Internal;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using OpenIddict.Abstractions;
using OpenIddict.Core;
using OpenIddict.EntityFrameworkCore.Models;

namespace FileStorage
{
    public class Startup
    {
        public Startup(IConfiguration configuration, IHostingEnvironment env)
        {
            Configuration = configuration;
            hostingEnvironment = env;
        }

        public static IConfiguration Configuration { get; private set; }
        public Startup(IHostingEnvironment hostingEnvironment) 
        {
            this.hostingEnvironment = hostingEnvironment;
               
        }
                private IHostingEnvironment hostingEnvironment { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContextPool<FileStorageContext>(options => 
             {
                 options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection"));
                 options.UseOpenIddict();
             });

            services.AddCors(options => options.AddPolicy("AllowLocalhost4200", builder => 
            { 
                builder
                .WithOrigins("http://localhost:4200")
                .WithHeaders("Authorization", "Content-Type", "Accept", "x-requested-with")
                .WithMethods("Get", "Post", "Put", "Delete")
                .AllowCredentials();
            }));

            services.AddCustomIdentity();
            services.AddCustomOpenIddict(hostingEnvironment);

            services.AddSignalR();
            services.AddMvc(options =>
            {
                options.Filters.Add(typeof(ModelStateValidationFilter));
            })
            .SetCompatibilityVersion(CompatibilityVersion.Version_2_1);

            // files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "Client/uploadedFiles";
            });
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseHsts();
            }

            app.UseCors("AllowLocalhost4200");
            app.UseSignalR(routes =>
            {
                routes.MapHub<ConnectionHub>("/connectionHub");
            });
            app.UseAuthentication();
            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseMvc();
            app.InitilizeDb();
        }
    }
}
