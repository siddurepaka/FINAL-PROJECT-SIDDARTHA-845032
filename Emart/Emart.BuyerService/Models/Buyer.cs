using System;
using System.Collections.Generic;

namespace Emart.BuyerService.Models
{
    public partial class Buyer
    {
        public Buyer()
        {
            PurchaseHistory = new HashSet<PurchaseHistory>();
        }

        public string Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Emailid { get; set; }
        public string MobileNumber { get; set; }
        public DateTime? Createdatetime { get; set; }

        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
    }
}
