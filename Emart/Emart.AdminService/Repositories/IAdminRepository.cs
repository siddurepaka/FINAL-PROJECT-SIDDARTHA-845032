using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace Emart.AdminService.Repositories
{
    interface IAdminRepository
    {
        void AddCategory(category category);
        void AddSubCategory(SubCategory subcategory);
        void DeleteCategory(string cid);
        void DeleteSubCategory(string scid);
    }
}
