using Emar.AccountService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emar.AccountService.Repositories
{
    public class accountRepository : IaccountRepository
    {
        private readonly EmartDBContext _context;
        public accountRepository(EmartDBContext context)
        {
            _context = context;
        }
        public Buyer Buyerlogin(string username, string password)
        {
            Buyer B = _context.Buyer.SingleOrDefault(i => i.Username == username && i.Password == password);
            return B;
        }

        public void Buyerregister(Buyer B)
        {
            _context.Add(B);
            _context.SaveChanges();
           
        }

        public Seller Sellerlogin(string username, string password)
        {
            Seller S = _context.Seller.SingleOrDefault(i => i.Username == username && i.Password == password);
            return S;

        }

        public void Sellerregister(Seller S)
        {
            _context.Add(S);
            _context.SaveChanges();
           
        }
        public List<Buyer> Get()
        {
            return _context.Buyer.ToList();
        }
        public List<Seller> GetS()
        {
            return _context.Seller.ToList();
        }

      }
}
