using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Emar.AccountService.Repositories;
using Emar.AccountService.Models;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.Extensions.Configuration;

namespace Emar.AccountService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    
    public class AccountController : ControllerBase
    {
       
        private readonly IaccountRepository _repo;
        private readonly IConfiguration configuration;
        public AccountController(IaccountRepository repo,IConfiguration confi)
        {
            _repo = repo;
            this.configuration = confi;
        }
        [HttpGet]
        [Route("Buyerlogin/{username}/{password}")]
        public IActionResult Buyerlogin(string username, string password)
        {
            Token token = null;
            try
            {
                Buyer buyer = _repo.Buyerlogin(username, password);
                if (buyer != null)
                {
                    token = new Token() { buyerid = buyer.Id, token = GenerateJwtToken(username), message = "success", username = username };
                }
                else
                {
                    token = new Token() { token = null, message = "Unsuccess" };

                }
                return Ok(token);
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
           Token token = null;
            try
            {

                Seller seller = _repo.Sellerlogin(username, password);
                if (seller != null)
                {
                    token = new Token() { sellerid = seller.Id, token = GenerateJwtToken(username), message = "success",username=username};
                }
                else
                {
                    token = new Token() { token = null, message = "unsuccess" };
                }
                return Ok(token);


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
                return NotFound(ex.InnerException.Message);

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
                return NotFound(ex.InnerException.Message);

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
       
        private string GenerateJwtToken(string uname)
        {
            var claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, uname),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, uname),
                new Claim(ClaimTypes.Role,uname)
            };
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JwtKey"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            // recommended is 5 min
            var expires = DateTime.Now.AddDays(Convert.ToDouble(configuration["JwtExpireDays"]));
            var token = new JwtSecurityToken(
                configuration["JwtIssuer"],
                configuration["JwtIssuer"],
                claims,
                expires: expires,
                signingCredentials: credentials
            );

            var response = new Token
            {
                username = uname,
                token = new JwtSecurityTokenHandler().WriteToken(token)
            };
            return new JwtSecurityTokenHandler().WriteToken(token);
        }


    }
}