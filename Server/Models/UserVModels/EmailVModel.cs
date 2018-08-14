using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;

namespace FileStorage.Server.Models.AccountVModels
{
    public class EmailVModel
    {
        [Required(ErrorMessage = "The email field is required.")]
        [EmailAddress(ErrorMessage = "Invalid email field.")]
        public string Email { get; set; }
    }
}