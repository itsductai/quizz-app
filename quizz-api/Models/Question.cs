using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace quizz_api.Models
{
    public class Question
    {
        [Key]
        public int QID { get; set; }

        [Column(TypeName = "nvarchar(250)")]
        public string QuestionText { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string? Img { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Option1 { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Option2 { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Option3 { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Option4 { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Answer { get; set; }
    }
}
