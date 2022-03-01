using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectLibrary.Models
{
    [Table("Book")]
    public class Book
    {
        [Column("Id")]
        public int Id { get; set; }
        [Column("Genero")]
        public string Genero { get; set; }
        [Column("Nome")]
        public string Nome { get; set; }
        [Column("Conteudo")]
        public string Conteudo { get; set; }
    }
}
