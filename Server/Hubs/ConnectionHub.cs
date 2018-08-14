using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FileStorage.Server.Helpers;
using FileStorage.Server.Models.IdentityModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SignalR;
using OpenIddict.Validation;

namespace AspNetCoreSpa.Server.Hubs
{
    [Authorize(AuthenticationSchemes = OpenIddictValidationDefaults.AuthenticationScheme)]
    public class ConnectionHub : Hub
    {
        public async Task OnConnectedAsync(string group)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, group);
        }

        public async Task OnDisconnectedAsync(string group)
        {
            await Groups.RemoveFromGroupAsync(Context.ConnectionId, group);
        }
    } 
}