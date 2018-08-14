using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Web;

namespace FileStorage.Server.Models.ManageVModels
{
    public class ChangePasswordVModel
    {
        [Required(ErrorMessage = "Password field is required!")]
        [DataType(DataType.Password)]
        [StringLength(25, ErrorMessage = "Password must be between 6 and 25 characters!", MinimumLength = 6)]
        public string CurrentPassword { get; set; }

        [Required(ErrorMessage = "Password field is required!")]
        [DataType(DataType.Password)]
        [StringLength(25, ErrorMessage = "Password must be between 6 and 25 characters!", MinimumLength = 6)]
        public string NewPassword { get; set; }
    }
}