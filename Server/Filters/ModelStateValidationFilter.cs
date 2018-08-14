using System;
using AspNetCoreSpa.Server;
using AspNetCoreSpa.Server.Helpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace FileStorage.Server.Filters
{
    public class ModelStateValidationFilter: IActionFilter
    {
        public void OnActionExecuting(ActionExecutingContext filterContext)
        {
            if (!filterContext.ModelState.IsValid)
            {
                if (filterContext.HttpContext.Request.Method == "GET")
                {
                    var result = new BadRequestResult();
                    filterContext.Result = result;
                }
                else
                {
                    var result = new ContentResult()
                    {
                        Content = ApiHelpers.JsonSerialize(new ApiError(filterContext.ModelState)),
                        ContentType = "application/json"
                    };

                    filterContext.HttpContext.Response.StatusCode = 400;
                    filterContext.Result = result;
                }
            }
        }

        public void OnActionExecuted(ActionExecutedContext context)
        {
        }
    }
}