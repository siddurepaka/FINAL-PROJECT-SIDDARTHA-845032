using Emat.SellerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emat.SellerService.Repositories
{
    public class SellerRepository : ISellerRepository
    {
        private readonly EmartDBContext _context;
        public SellerRepository(EmartDBContext context)
        {
            _context = context;
        }

        public void Editprofile(Seller obj)
        {
            _context.Seller.Update(obj);
            _context.SaveChanges();
        }

        public Seller Getprofile(string id)
        {
            return _context.Seller.Find(id);
        }

        public List<PurchaseHistory> GetReports(string sellerid)
        {
            return _context.PurchaseHistory.Where(e => e.Id == sellerid).ToList();

        }
    }
}
