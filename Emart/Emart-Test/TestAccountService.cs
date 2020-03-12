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
            var result= _repo.Buyerlogin("siddu", "12345");
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
                Id = "7309",
                Username = "devud0",
                Password = "devudu2364$",
                Emailid = "devdu7@vaikuntam",
                MobileNumber = "9848052338",
                Createdatetime = DateTime.Now,

            });
            var res = _repo.Buyerlogin("devud0", "devudu2364$");
            Assert.IsNotNull(res);
        }
        [Test]
        public void TestRegisterSeller()
        {
            _repo.Sellerregister(new Seller()
            {
                Id = "4209",
                Username = "Mous26",
                Password = "Mou82@",
                Emailid = "mo2@mail.com",
                ContactNumber = "9533666725",
                CompanyName = "Alpha2tech",
                Gstin = "k85726",
                BriefAboutCompany = "LuggageManufacturers",
                PostalAddress = "karampaka",
                Website = "www.so2.com",
            });
            var res = _repo.Sellerlogin("Mous26", "Mou82@");
            Assert.IsNotNull(res);
        }
       
    }
}
