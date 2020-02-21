using Emar.AccountService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emar.AccountService.Repositories
{
   public interface IaccountRepository
    {
        bool Buyerlogin(string username, string password);
        bool Sellerlogin(string username, string password);
        void Buyerregister(Buyer B);
        void Sellerregister(Seller S);
        List<Buyer> Get();
        List<Seller> GetS();

    }
}
