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
                Id = "5309",
                Username = "devudu",
                Password = "devudu1234$",
                Emailid = "devdu@vaikuntam",
                MobileNumber = "9848022338",
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
                Id = "4309",
                Username = "Mousey1",
                Password = "Mou8925$$",
                Emailid = "mos@mail.com",
                ContactNumber = "9533444875",
                CompanyName = "Alphatech",
                Gstin = "k684",
                BriefAboutCompany = "Luggage Manufacturers",
                PostalAddress = "karampakam",
                Website = "www.so.com",
            });
            var res = _repo.Sellerlogin("Mousey1", "Mou8925$$");
            Assert.IsNotNull(res);
        }
       
    }
}
