using Emat.SellerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emat.SellerService.Repositories
{
   public interface ISellerItemRepository
    {
        void Additems(Items obj);
        List<Items> Viewitems(string id);
        void DeleteItem(string id);
        void UpdateItem(Items obj);
        Items GetItems(string id);
        List<Category> GetAllcategories();
        List<SubCategory> GetAllSubCategories(string cid);
    }
}
