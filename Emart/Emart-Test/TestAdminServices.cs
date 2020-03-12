﻿using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using Emart.AdminServices.Models;
using Emart.AdminServices.Repositories;

namespace Emart_Test
{
    class TestAdminServices
    {
        [TestFixture]
        public class TestAccountService
        {
            AdminService _repo;
            [SetUp]
            public void setup()
            {
                _repo = new AdminService(new EmartDBContext());
            }
            [Test]
            public void TestAddCategory()
            {
                _repo.AddCategory(new Category()
                {
                    CategoryId = "CAT677",
                    CategoryName = "Kanchi Pattu",
                    BriefDetails = "Gold and silver jery",
                });
                var result = _repo.GetCategorybyid("CAT677");
                Assert.IsNotNull(result);
            }
            [Test]
            public  void TestAddSubCategory()
            {
                _repo.AddSubCategory(new SubCategory()
                {
                    SubCategoryId = "SUB677",
                    SubCategoryName = "pattu Broad border",
                    BriefDetails = "Gold and Silver jery",
                    CategoryId = "CAT677",
                    Gst="k7845978"

                });
                var res = _repo.GetSubCategorybyid("SUB677");
                Assert.IsNotNull(res);
            }



        }
    }
}
