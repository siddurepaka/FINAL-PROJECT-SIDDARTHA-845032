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
    public class SellerController : ControllerBase
    {
        private readonly ISellerRepository _repo;
        public SellerController(ISellerRepository repo)
        {
            _repo = repo;
        }
        [HttpPut]
        [Route("Editprofile")]
        public IActionResult EditProfile(Seller sel)
        {
            try
            {
                _repo.Editprofile(sel);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }

        }
        [HttpGet]
        [Route("Getprofile/{id}")]
        public IActionResult GetProfie(string id)
        {
            try
            {
                return Ok(_repo.Getprofile(id));
            }
            catch (Exception ex)
            {
                return NotFound(ex.InnerException.Message);
            }
        }
        [HttpGet]
        [Route("GetReports/{Sellerid}")]
        public IActionResult GetReports(string sellerid)
        {
            try
            {
                return Ok(_repo.GetReports(sellerid));
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

    }
}