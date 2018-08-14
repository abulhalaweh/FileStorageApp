using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FileStorage.Server.Models
{
    public class FileDTO
    {
        public string FileId { get; set; }
        public string FileName { get; set; }
        public string FileSize { get; set; }
        public string FilePath { get; set; }
        public DateTime UploadDate { get; set; }
        public string CreatedByName { get; set; }
    }
}
