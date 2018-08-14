using System;
using System.ComponentModel.DataAnnotations;

namespace FileStorage.Server.Models.UserVModels
{
    public class GeneralUserModel: UserVModel
    {
        public string Specialization { get; set; }

        [Range(1, 45, ErrorMessage = "Cannot be less than 1 and more than 45")]
        [Display(Name = "Years of experience")]
        public int? YearsOfExperience { get; set; }
    }
}