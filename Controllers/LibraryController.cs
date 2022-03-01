using Microsoft.AspNetCore.Mvc;
using ProjectLibrary.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectLibrary.Controllers
{
    [ApiController]
    [Route("api/[Controller]")]
    public class LibraryController : ControllerBase
    {
        [HttpGet]
        [Route("Isalive")]
        public string Isalive()
        {
            return "ok";
        }

 //TO DO
    }
}
