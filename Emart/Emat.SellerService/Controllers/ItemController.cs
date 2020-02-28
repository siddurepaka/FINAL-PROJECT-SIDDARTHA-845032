using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Emat.SellerService.Models;
using Emat.SellerService.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Emat.SellerService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemController : ControllerBase
    {
        private readonly ISellerItemRepository _repo;
        public ItemController(ISellerItemRepository repo)
        {
            _repo = repo;
        }
        [HttpPost]
        [Route("AddItems")]
        public IActionResult Additems(Items item)
        {
            try
            {
                _repo.Additems(item);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }

        }
        [HttpDelete]
        [Route("Deleteitem/{id}")]
        public IActionResult DeleteItem(string id)
        {
            try
            {
                _repo.DeleteItem(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }

        }
        [HttpPut]
        [Route("Updateitem")]
        public IActionResult UpdateItemsStock(Items item)
        {
            try
            {
                _repo.UpdateItem(item);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }

        }
        [HttpGet]
        [Route("Viewitems/{id}")]
        public IActionResult ViewItems(string id)
        {
            try
            {

                return Ok(_repo.Viewitems(id));
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("Getitem/{id}")]
        public IActionResult GetItem(string id)
        {
            try
            {
                return Ok(_repo.GetItems(id));
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }





    }
}