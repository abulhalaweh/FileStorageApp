using System;
using System.Threading.Tasks;
using FileStorage.Server.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;

namespace FileStorage.Server.Extensions
{
    public static class ApplicationBuilderExtensions
    {
        public static IApplicationBuilder InitilizeDb(this IApplicationBuilder app)
        {
            try
            {
                IServiceProvider provider = app.ApplicationServices.CreateScope().ServiceProvider;
                var context = provider.GetService<FileStorageContext>();
                context.Database.EnsureCreated();
                new IdentityDbInitilizer(context, provider);
                new OpenIddictDbInitilizer(provider);
                context.SaveChanges();
            }
            catch (Exception) { }
            return app;
        }
    }
}
