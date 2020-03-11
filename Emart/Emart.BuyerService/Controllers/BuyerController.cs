﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emart.BuyerService.Models;
using Emart.BuyerService.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Emart.BuyerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BuyerController : ControllerBase
    {
        private readonly IBuyerRepository _repo;
        public BuyerController(IBuyerRepository repo)
        {
            _repo = repo;
        }
        [HttpPost]
        [Route("BuyItem")]
        public IActionResult BuyItem(PurchaseHistory item)
        {
            try
            {
                _repo.BuyItem(item);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpPut]
        [Route("EditProfile")]
        public IActionResult Editprofile(Buyer item)
        {
            try
            {
                _repo.EditProfile(item);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet]
        [Route("GetProfile/{id}")]
        public IActionResult GetProfile(string id)
        {
            try
            {
                return Ok(_repo.GetProfile(id));
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("PurchaseHistory/{Buyer_id}")]
        public IActionResult PurchaseHistory(string Buyer_id)
        {
            try
            {
                return Ok(_repo.PurchaseHistory(Buyer_id));
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet]
        [Route("SearchItemByName/{item_name}")]
        public IActionResult SearchItemByName(string item_name)
        {
            try
            {
                return Ok(_repo.SearchItemByName(item_name));
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("SearchItemByCategory/{category_id}")]
        public IActionResult SearchItemByCategory(string category_id)
        {
            try
            {
                return Ok(_repo.SearchItemByCategory(category_id));
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("SearchItemBySubCategory/{subcategory_id}")]
        public IActionResult SearchItemBySubCategory(string subcategory_id)
        {
            try
            {
                return Ok(_repo.SearchItemBySubCategory(subcategory_id));
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetCategories")]
        public IActionResult GetCategories()
        {
            try
            {
                return Ok(_repo.GetCategories());
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet]
        [Route("GetSubCategories/{category_id}")]
        public IActionResult GetCategories(string category_id)
        {
            try
            {
                return Ok(_repo.GetSubCategories(category_id));
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet]
        [Route("GetAllItems")]
        public IActionResult GetAllItems()
        {
            try
            {
                return Ok(_repo.GetAllItems());
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpPost]
        [Route("AddtoCart")]
        public IActionResult AddtoCart(Cart cart)
        {
            try
            {
                _repo.AddtoCart(cart);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetCartItems/{buyerid}")]
        public IActionResult GetCartItems(string buyerid)
        {
            try
            {
                return Ok(_repo.GetCartItems(buyerid));
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpDelete]
        [Route("DeleteCartItem/{cartid}")]
        public IActionResult DeleteCartItem(string cartid)
        {
            try
            {
                _repo.DeleteCartItem(cartid);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet]
        [Route("GetCount/{buyer_id}")]
        public IActionResult GetCount(string buyerid)
        {
            try
            {
                return Ok(_repo.GetCount(buyerid));
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

    }

}