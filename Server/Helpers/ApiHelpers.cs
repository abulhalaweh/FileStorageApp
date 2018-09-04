using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using AspNet.Security.OpenIdConnect.Extensions;
using AspNet.Security.OpenIdConnect.Primitives;
using AspNetCoreSpa.Server.Hubs;
using FileStorage.Server.Filters;
using FileStorage.Server.Helpers;
using FileStorage.Server.Models.AccountVModels;
using FileStorage.Server.Models.IdentityModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace AspNetCoreSpa.Server.Helpers
{
    public static class ApiHelpers
    {
        public static string JsonSerialize(object obj)
        {
            return JsonConvert.SerializeObject(obj,
            new JsonSerializerSettings
            {
                ReferenceLoopHandling = ReferenceLoopHandling.Ignore,
                StringEscapeHandling = StringEscapeHandling.EscapeHtml,
                ContractResolver = new CamelCasePropertyNamesContractResolver()
            });
        }

        public static async Task NotifyClients(this IHubContext<ConnectionHub> _dataHub, 
                                                ApplicationUser user, 
                                                string role, 
                                                bool registerAsDoctor)
        {
            var group = registerAsDoctor ? "Admin" : "Admin";//"PatientsGroup" : "DoctorsGroup";
            var vModel =  MappingHelper.CreateUserVModel(role);
            MappingHelper.MapModels(user, vModel);
            await _dataHub.Clients.Groups(group).SendCoreAsync("OnNewUserAdded", new object[] { vModel });
        }
    }
}