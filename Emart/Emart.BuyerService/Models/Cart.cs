using System;
using System.Collections.Generic;

namespace Emart.BuyerService.Models
{
    public partial class Cart
    {
        public string Cartid { get; set; }
        public string Id { get; set; }
        public string CategoryId { get; set; }
        public string SubCategoryId { get; set; }
        public int? Price { get; set; }
        public string ItemName { get; set; }
        public string ItemDescription { get; set; }
        public int? StockNumber { get; set; }
        public string Remarks { get; set; }
        public string Image { get; set; }
        public string Buyerid { get; set; }
        public string Sellerid { get; set; }

        public virtual Buyer Buyer { get; set; }
        public virtual Category Category { get; set; }
        public virtual Items IdNavigation { get; set; }
        public virtual Seller Seller { get; set; }
        public virtual SubCategory SubCategory { get; set; }
    }
}
