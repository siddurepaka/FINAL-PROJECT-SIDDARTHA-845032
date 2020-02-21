using System;
using System.Collections.Generic;

namespace Emar.AccountService.Models
{
    public partial class Seller
    {
        public Seller()
        {
            PurchaseHistory = new HashSet<PurchaseHistory>();
        }

        public string Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Emailid { get; set; }
        public int ContactNumber { get; set; }
        public string CompanyName { get; set; }
        public string Gstin { get; set; }
        public string BriefAboutCompany { get; set; }
        public string PostalAddress { get; set; }
        public string Website { get; set; }

        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
    }
}
