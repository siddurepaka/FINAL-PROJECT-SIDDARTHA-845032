using System;
using System.Collections.Generic;

namespace Emart.AdminServices.Models
{
    public partial class Items
    {
        public Items()
        {
            PurchaseHistory = new HashSet<PurchaseHistory>();
        }

        public string Id { get; set; }
        public string CategoryId { get; set; }
        public string SubCategoryId { get; set; }
        public string Sellerid { get; set; }
        public int Price { get; set; }
        public string ItemName { get; set; }
        public string ItemDescription { get; set; }
        public int StockNumber { get; set; }
        public string Remarks { get; set; }

        public virtual Category Category { get; set; }
        public virtual Seller Seller { get; set; }
        public virtual SubCategory SubCategory { get; set; }
        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
    }
}
