import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Seller } from 'src/app/model/seller';


@Component({
  selector: 'app-register-seller',
  templateUrl: './register-seller.component.html',
  styleUrls: ['./register-seller.component.css']
})
export class RegisterSellerComponent implements OnInit {
  registerform:FormGroup;
  submitted=false;
  item:Seller;

  constructor(private formbuilder:FormBuilder) {
    this.item=new Seller();
   }

  ngOnInit() {
    this.registerform=this.formbuilder.group({
      username:['',Validators.required,Validators.pattern("^[A-Za-z0-9]{8}$")],
      password:['',Validators.required],
companyname:['',Validators.required],
gstin:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
brief_about_company:['',Validators.required],
postal_address:['',Validators.required],
website:['',[Validators.required,Validators.pattern("/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/")]],
emailid:['',Validators.required,Validators.email],
mobile:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]]

    });
  }
  get f(){return this.registerform.controls;}
  OnSubmit()
  {
    this.submitted=true;
    if(this.registerform.valid)
    {
      alert('Success!!\n\n')
      // this.item=new Buyer();
      // this.item.id=this.registerForm.value["id"];
      // this.item.username=this.registerForm.value["username"];
      // this.item.password=this.registerForm.value["password"];
      // this.item.mobile=this.registerForm.value["emailid"];
      // this.item.createdatetime=this.registerForm.value["createdatetime"];
    }
  }

}
