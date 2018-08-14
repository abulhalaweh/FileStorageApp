using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace FileStorage.Server.Models.AccountVModels
{
    public class RegisterVModel
    {
        [Required(ErrorMessage = "Last name field is required!")]
        [StringLength(15, ErrorMessage = "Last name length must be between 2 and 15 symbols!", MinimumLength = 2)]
        [Display(Name = "Last name")]
        public string LastName { get; set; }

        [Required(ErrorMessage = "First name field is required!")]
        [StringLength(15, ErrorMessage = "First name length must be between 2 and 15 symbols!", MinimumLength = 2)]
        [Display(Name = "First name")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "The email field is required!")]
        [EmailAddress(ErrorMessage = "Invalid email field")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Password field is required!")]
        [StringLength(25, ErrorMessage = "Password length must be between 6 and 25 symbols!", MinimumLength = 6)]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        public bool RegisterAsDoctor { get; set; }
    }
}