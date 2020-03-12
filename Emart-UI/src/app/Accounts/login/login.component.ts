import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Buyer } from 'src/app/model/buyer';
import { Seller } from 'src/app/model/seller';
import { Token } from 'src/app/model/token';
import { AccountService } from 'src/app/services/account.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform:FormGroup;
  submitted=false;
  buyer:Buyer;
  seller:Seller;
  role:string;
  token:Token;
  
    constructor(private formbuilder:FormBuilder,private service:AccountService,private route:Router ) {
      this.buyer=new Buyer();
      this.seller=new Seller();
      this.token=new Token();
  
     }
  
    ngOnInit() {
      this.loginform=this.formbuilder.group({
        username:['',Validators.required],
        password:['',Validators.required],
        role:['']
      });
    }
    onSubmit()
    {
      this.submitted=true;
      if(this.loginform.invalid)
      {
        return;
      }
      else
      {
        
        let username=this.loginform.value['username'];
  let password=this.loginform.value['password'];
  let role=this.loginform.value['role'];
  // alert(username)
  // alert(role)
  if(role=='buyer')
{
  let token=new Token();
this.service.BuyerLogin(username,password).subscribe(res=>{token=res;console.log(token)
  if(token.message=="success"){
    localStorage.setItem('buyer',token.buyerid);
    localStorage.setItem('token',this.token.token);

    alert("Form is Validated");
    
  this.route.navigateByUrl("buyer-landing-page")
  }
  else{
    alert("inavlid");
  }
});
}
if(role=='seller')
{
 let token=new Token();
this.service.SellerLogin(username,password).subscribe(res=>{token=res;console.log(token)
  if(token.message=="success"){
    localStorage.setItem('seller',token.sellerid);
    localStorage.setItem('token',this.token.token);

    this.route.navigateByUrl("seller-landing-page")
  }
  else{
    alert("inavlid");
  }
});

}
if(username=="Admin" && password=="admin")
{
  alert('admin is logged in');
  this.route.navigateByUrl("admin");
}
}
}
    get f() {return this.loginform.controls};
    onReset()
    {
      this.submitted=false;
      this.loginform.reset();
    }
    
  }
  
  