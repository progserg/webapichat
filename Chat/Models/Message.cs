using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Chat.Models
{
    public class Message
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string Content { get; set; }
        public DateTime Time { get; set; }
    }
}