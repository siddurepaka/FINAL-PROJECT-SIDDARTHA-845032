using Emart.AdminServices.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.AdminServices.Repositories
{
  public  interface IAdminServices
    {

        void AddCategory(Category category);
        void AddSubCategory(SubCategory subcategory);
        void DeleteCategory(string cid);
        void DeleteSubCategory(string scid);
        List<Category> viewcategory();
    }
}
