using System;
using System.Collections.Generic;

namespace Emat.SellerService.Models
{
    public partial class SubCategory
    {
        public SubCategory()
        {
            Items = new HashSet<Items>();
        }

        public string SubCategoryId { get; set; }
        public string SubCategoryName { get; set; }
        public string CategoryId { get; set; }
        public string BriefDetails { get; set; }
        public string Gst { get; set; }

        public virtual Category Category { get; set; }
        public virtual ICollection<Items> Items { get; set; }
    }
}
