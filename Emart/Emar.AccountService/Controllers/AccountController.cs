using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emar.AccountService.Repositories;
using Emar.AccountService.Models;

namespace Emar.AccountService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IaccountRepository _repo;
        public AccountController(IaccountRepository repo)
        {
            _repo = repo;
        }
        [HttpGet]
        [Route("Buyerlogin/{username}/{password}")]
        public IActionResult Buyerlogin(string username, string password)
        {
            try
            {
                return Ok(_repo.Buyerlogin(username, password));

            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpGet]
        [Route("Sellerlogin/{username}/{password}")]
        public IActionResult Sellerlogin(string username, string password)
        {
            try
            {
                return Ok(_repo.Sellerlogin(username, password));

            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
        [HttpPost]
        [Route("RegisterBuyer")]
        public IActionResult Buyerregister(Buyer B)
        {
            try
            {
                _repo.Buyerregister(B);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);

            }
        }
        [HttpPost]
        [Route("RegisterSeller")]
        public IActionResult Sellerregister(Seller S)
        {
            try
            {
                _repo.Sellerregister(S);
                return Ok();
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);

            }
        }

        [HttpGet]
        [Route("Get")]
        public IActionResult Get()
        {
            return Ok(_repo.Get());
        }
        [HttpGet]
        [Route("GetS")]
        public IActionResult GetS()
        {
            return Ok(_repo.GetS());
        }



    }
}