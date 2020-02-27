import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Seller } from 'src/app/model/seller';
import{AccountService}from 'src/app/services/account.service'


@Component({
  selector: 'app-register-seller',
  templateUrl: './register-seller.component.html',
  styleUrls: ['./register-seller.component.css']
})
export class RegisterSellerComponent implements OnInit {
  registerform:FormGroup;
  submitted=false;
  seller:Seller;
  lists:Seller[]=[];


  constructor(private formBuilder:FormBuilder,private service:AccountService) {
    this.seller=new Seller();
   }

  ngOnInit() {
    this.registerform=this.formBuilder.group({
      id:['',[Validators.required,Validators.pattern("^[1-9]{4}$")]],
      username:['',[Validators.required,Validators.pattern("^[A-Za-z0-9]{8}$")]],
      password:['',Validators.required],
companyName:['',Validators.required],
Gstin:['',Validators.required],
BriefAboutCompany:['',Validators.required],
postalAddress:['',Validators.required],
website:['',Validators.required],
emailid:['',[Validators.required,Validators.email]],
ContactNumber:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]]

    });
  }
  
  OnSubmit()
  {
    this.submitted=true;
    if(this.registerform.valid)
    {
      alert('Success!!\n\n')
      this.seller.id=this.registerform.value["id"],
      this.seller.username=this.registerform.value["username"],
      this.seller.password=this.registerform.value["password"],
      this.seller.emailid=this.registerform.value["emailid"],
      this.seller.ContactNumber=this.registerform.value["ContactNumber"],
      this.seller.companyName=this.registerform.value["companyName"],
      this.seller.postalAddress=this.registerform.value["postalAddress"],
      this.seller.BriefAboutCompany=this.registerform.value["BriefAboutCompany"],
      this.seller.Gstin=this.registerform.value["Gstin"],
      this.seller.website=this.registerform.value["website"]
      console.log(this.seller); 
      this.service.RegisterSeller(this.seller).subscribe(res=>{
        alert('Registration Successfull');
      },err=>{
        console.log(err);
      })
    }
  }
  get f() { return this.registerform.controls; }
onReset()
{
  this.submitted=false;
  this.registerform.reset();
}
}
