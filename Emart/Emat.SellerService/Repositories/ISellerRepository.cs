using Emat.SellerService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emat.SellerService.Repositories
{
   public interface ISellerRepository
    {
        void Editprofile(Seller obj);
        Seller Getprofile(string id);
    }
}
