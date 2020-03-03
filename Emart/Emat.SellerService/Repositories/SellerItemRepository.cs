using Emat.SellerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emat.SellerService.Repositories
{
    public class SellerItemRepository : ISellerItemRepository
    {
        private readonly EmartDBContext _context;
        public SellerItemRepository(EmartDBContext context)
        {
            _context = context;

        }
        public void Additems(Items obj)
        {
            _context.Add(obj);
            _context.SaveChanges();

        }

        public void DeleteItem(string id)
        {
            Items item = _context.Items.Find(id);
            _context.Remove(item);
            _context.SaveChanges();
        }

        public List<Category> GetAllcategories()
        {
            return _context.Category.ToList();
        }

        public List<SubCategory> GetAllSubCategories(string cid)
        {
            List<SubCategory> subCategories = _context.SubCategory.Where(i => i.CategoryId == cid).ToList();
            return subCategories;
        }

        public Items GetItems(string sid)
        {
            return _context.Items.Find(sid);

        }

        public void UpdateItem(Items obj)
        {
            _context.Items.Update(obj);
            _context.SaveChanges();
        }

        public List<Items> Viewitems(string sid)
        {
            var s = _context.Items.Where(id => id.Sellerid == sid).ToList();

            return s;

        }
    }
}
