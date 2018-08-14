using System;
using System.Threading.Tasks;
using FileStorage.Server.Data;
using Microsoft.Extensions.DependencyInjection;
using OpenIddict.Abstractions;
using OpenIddict.Core;
using OpenIddict.EntityFrameworkCore.Models;

namespace FileStorage.Server
{
    public class OpenIddictDbInitilizer
    {
        public OpenIddictDbInitilizer(IServiceProvider provider)
        {
            InitApplicationsConfigs(provider).GetAwaiter().GetResult();
        }

        public async Task InitApplicationsConfigs(IServiceProvider provider)
        {
            using (var scope = provider.GetRequiredService<IServiceScopeFactory>().CreateScope())
            {
                var context = scope.ServiceProvider.GetRequiredService<FileStorageContext>();
                await CreateApplicationsAsync();

                async Task CreateApplicationsAsync()
                {
                    var manager = scope.ServiceProvider.GetRequiredService<OpenIddictApplicationManager<OpenIddictApplication>>();

                    if (await manager.FindByClientIdAsync("6839ef20b75817b79109") == null)
                    {
                        var descriptor = new OpenIddictApplicationDescriptor
                        {
                            ClientId = "6839ef20b75817b79109",
                            DisplayName = "FileStorage",
                            RedirectUris = { new Uri("https://localhost:44386") },
                            Permissions =
                            {
                                OpenIddictConstants.Permissions.Endpoints.Token,
                                OpenIddictConstants.Permissions.Endpoints.Authorization,

                                OpenIddictConstants.Permissions.GrantTypes.Password,
                                OpenIddictConstants.Permissions.GrantTypes.RefreshToken,
                                OpenIddictConstants.Permissions.GrantTypes.AuthorizationCode,

                                OpenIddictConstants.Permissions.Scopes.Profile,
                                OpenIddictConstants.Permissions.Scopes.Roles,
                                OpenIddictConstants.Permissions.Scopes.OfflineAccess,
                                OpenIddictConstants.Permissions.Scopes.OpenId
                            }
                        };

                        await manager.CreateAsync(descriptor);
                    }
                }
            }
        }
    }
}