﻿using System;
using System.Collections.Generic;

namespace Emar.AccountService.Models
{
    public partial class Items
    {
        public Items()
        {
            Cart = new HashSet<Cart>();
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
        public string Image { get; set; }

        public virtual Category Category { get; set; }
        public virtual Seller Seller { get; set; }
        public virtual SubCategory SubCategory { get; set; }
        public virtual ICollection<Cart> Cart { get; set; }
        public virtual ICollection<PurchaseHistory> PurchaseHistory { get; set; }
    }
}
