using System;
using System.Collections.Generic;

namespace Emat.SellerService.Models
{
    public partial class Discounts
    {
        public string Id { get; set; }
        public string DiscountCode { get; set; }
        public decimal Percentage { get; set; }
        public DateTime StartDate1 { get; set; }
        public DateTime EndDate { get; set; }
        public string Description { get; set; }
    }
}
