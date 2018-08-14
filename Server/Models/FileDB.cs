using FileStorage.Server.Models.IdentityModels;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace FileStorage.Models
{
    public class FileDB
    {
        [Key]
        public string FileId { get; set; }

        [Required]
        [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "Use letters only please")]
        public string FileName { get; set; }
        public string FileSize { get; set; }
        [Required]
        [StringLength(200)]
        public string FilePath { get; set; }
        public DateTime UploadDate { get; set; }

        [StringLength(450)]
        public string CreatedByID { get; set; }
        public ApplicationUser CreatedBy { get; set; }
    }
}
