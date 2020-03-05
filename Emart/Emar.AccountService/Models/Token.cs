using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emar.AccountService.Models
{
    public class Token
    {
        public string username { get; set; }
        public string token { get; set; }
        public string buyerid { get; set; }
        public string sellerid { get; set; }
        public string message { get; set; }

    }
}
