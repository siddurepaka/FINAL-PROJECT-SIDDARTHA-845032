using System;
using System.Collections.Generic;
using System.Text;
using Emat.SellerService.Models;
using Emat.SellerService.Repositories;
using NUnit.Framework;

namespace Emart_Test
{
    [TestFixture]
    class TestSellerService
    {
        SellerRepository _repo;
        [SetUp]
        public void SetUp()
        {
            _repo = new SellerRepository(new EmartDBContext());
        }
        [Test]
        [Description("Test EditProfile()")]
        public void TestEditProfile()
        {
            Seller seller = _repo.Getprofile("S001");
            seller.PostalAddress = "600096";
            _repo.Editprofile(seller);
            Seller seller1 = _repo.Getprofile("S001");
            Assert.AreSame(seller, seller1);
        }
        [Test]
        [Description("Test GetProfile()")]
        public void TestGetProfile()
        {
            var result = _repo.Getprofile("S001");
            Assert.IsNotNull(result);
        }
    }
}
