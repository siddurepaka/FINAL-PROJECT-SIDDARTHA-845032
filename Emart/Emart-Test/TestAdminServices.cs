using System;
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
                    CategoryId = "CAT674",
                    CategoryName = "Uppada",
                    BriefDetails = "narrow borderd net sarees",
                });
                var result = _repo.GetCategorybyid("CAT674");
                Assert.IsNotNull(result);
            }
            [Test]
            public  void TestAddSubCategory()
            {
                _repo.AddSubCategory(new SubCategory()
                {
                    SubCategoryId = "SUB674",
                    SubCategoryName = "Net Sarees",
                    BriefDetails = "jery",
                    CategoryId = "CAT674",
                    Gst="k78459748"

                });
                var res = _repo.GetSubCategorybyid("SUB674");
                Assert.IsNotNull(res);
            }



        }
    }
}
