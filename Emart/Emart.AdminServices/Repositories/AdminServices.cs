﻿using Emart.AdminServices.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Emart.AdminServices.Repositories
{
    public class AdminServices : IAdminServices
    {
        private readonly EmartDBContext _context;
        public AdminServices(EmartDBContext context)
        {
            _context = context;
        }

        public void AddCategory(Category obj)
        {
            _context.Add(obj);
            _context.SaveChanges();


        }

        public void AddSubCategory(SubCategory obj)
        {
            _context.Add(obj);
            _context.SaveChanges();


        }

        public void DeleteCategory(string cid)
        {
            Category category = _context.Category.Find(cid);
            _context.Category.Remove(category);
            _context.SaveChanges();

        }

        public void DeleteSubCategory(string scid)
        {
            SubCategory subcategory = _context.SubCategory.Find(scid);
            _context.SubCategory.Remove(subcategory);
            _context.SaveChanges();

        }
    }
}
