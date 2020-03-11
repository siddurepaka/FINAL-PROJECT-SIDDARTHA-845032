using System;
using System.Collections.Generic;
using System.Text;
using Emar.AccountService.Models;
using Emar.AccountService.Repositories;
using NUnit.Framework;

namespace Emart_Test
{
    [TestFixture]
    public class TestAccountService
    {
        accountRepository _repo;
        [SetUp]
        public void setup()
        {
            _repo = new accountRepository(new EmartDBContext());
        }
        
        [Test]
        public void TestBuyerLogin()
        {
            var result= _repo.Buyerlogin("siddu", "1234");
            Assert.IsNotNull(result);

        }
        [Test]
        public void TestSellerLogin()
        {
            var res = _repo.Sellerlogin("seller", "1234");
            Assert.IsNotNull(res);
        }
        [Test]
        public void TestRegisterBuyer()
        {
            _repo.Buyerregister(new Buyer()
            {
                Id = "4309",
                Username = "devud6u",
                Password = "devudu12364$",
                Emailid = "devdu1@vaikuntam",
                MobileNumber = "9848042338",
                Createdatetime = DateTime.Now,

            });
            var res = _repo.Buyerlogin("devudu", "devudu1234$");
            Assert.IsNotNull(res);
        }
        [Test]
        public void TestRegisterSeller()
        {
            _repo.Sellerregister(new Seller()
            {
                Id = "4709",
                Username = "Mous76",
                Password = "Mou89@",
                Emailid = "mo1@mail.com",
                ContactNumber = "9533666775",
                CompanyName = "Alpha6tech",
                Gstin = "k85746",
                BriefAboutCompany = "LuggageManufacturers",
                PostalAddress = "karampaka",
                Website = "www.so1.com",
            });
            var res = _repo.Sellerlogin("Mous76", "Mou89@");
            Assert.IsNotNull(res);
        }
       
    }
}
