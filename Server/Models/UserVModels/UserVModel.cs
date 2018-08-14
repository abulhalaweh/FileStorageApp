using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace FileStorage.Server.Models.UserVModels
{
    public class UserVModel
    {
        [Required(ErrorMessage = "Last name field is required!")]
        [StringLength(25, ErrorMessage = "Last name length must be between 2 and 25 symbols!", MinimumLength = 2)]
        [Display(Name = "Last name")]
        public string LastName { get; set; }

        [Required(ErrorMessage = "First name field is required!")]
        [StringLength(25, ErrorMessage = "First name length must be between 2 and 25 symbols!", MinimumLength = 2)]
        [Display(Name = "First name")]
        public string FirstName { get; set; }

        [Range(18, 90, ErrorMessage = "Age must be between 18 and 90")]
        public int? Age { get; set; }

        [Required(ErrorMessage = "The email field is required!")]
        [EmailAddress(ErrorMessage = "Invalid email field")]
        public string UserName  { get; set; }
    }
}