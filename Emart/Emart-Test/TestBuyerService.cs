using System;
using System.Collections.Generic;
using System.Text;
using Emart.BuyerService.Models;
using Emart.BuyerService.Repositories;
using NUnit.Framework;

namespace Emart_Test
{
    [TestFixture]
    class TestBuyerService
    {
        BuyerRepository _repo;
        [SetUp]
        public void setup()
        {
            _repo = new BuyerRepository(new EmartDBContext());
            
        }
        [Test]
        public void TestBuyItem()
        {
            _repo.BuyItem(new PurchaseHistory()
            {
                Id = "TR134",
                BuyerId = "1122",
                SellerId = "EMARTSEL31",
                ItemId = "I126",
                TransactionType = "Card",
                DateTime = DateTime.Now,
                Remarks = "none",
                Numberofitems = "2",


            });
            var res = _repo.SearchItemByName("Blue Lahenga");
            Assert.IsNotNull(res);
        }
        [Test]
        [Description("To test Add to cart")]
        public void Addtocart()
        {
            _repo.AddtoCart(new Cart()
            {
                Cartid = "CAR65",
                Id = "I126",
                CategoryId = "CAT83",
                SubCategoryId = "SUBC740",
                ItemName = "Blue Lahenga",
                Price = 4999,
                ItemDescription = "silk blended",
                StockNumber = 26,
                Remarks="66",
                Buyerid="1122",
                Sellerid="EMARTSEL31",
                Image="p2.jpg",


            });
        }
        [Test]
        [Description("to test edit profile ")]
        public void TestEditProfile()
        {
            Buyer Buyer = _repo.GetProfile("1122");
            Buyer.MobileNumber = "9440848924";
            _repo.EditProfile(Buyer);
            Buyer Buyer1 = _repo.GetProfile("1122");
            Assert.AreSame(Buyer, Buyer1);

        }
        [Test]
        [Description("to test Get All Items")]

        public void TestGetAllItems()
        {
            var result = _repo.GetAllItems();
            Assert.IsNotNull(result);
            Assert.Greater(result.Count, 0);
        }
        [Test]
        [Description("to test Get cart by id")]

        public void TestCartItems()
        {
            var result = _repo.GetCartItems("CAR65");
            Assert.IsNotNull(result);
        }
           [Test]
        [Description("to test delete cart items")]
        public void TestTodelete()
        {
            _repo.DeleteCartItem("EMCR80");
            var result = _repo.Getcart("EMRC80");
            Assert.Null(result);
        }

    }
     
}
