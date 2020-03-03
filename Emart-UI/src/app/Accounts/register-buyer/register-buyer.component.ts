import { Component, OnInit } from '@angular/core';
import{FormBuilder,Validators,FormGroup} from '@angular/forms';
import { Buyer } from 'src/app/model/buyer';
import{AccountService}from 'src/app/services/account.service'
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-register-buyer',
  templateUrl: './register-buyer.component.html',
  styleUrls: ['./register-buyer.component.css']
})
export class RegisterBuyerComponent implements OnInit {
  registerForm:FormGroup;
  submitted=false;
  lists:Buyer[];
  buyer:Buyer;
  //id:number;
  username:string;
  password:string;
  emailid:string;
  mobileNumber:number;
  createdatetime:Date;

  constructor(private formBuilder:FormBuilder,private service:AccountService) { }

  ngOnInit() {
    this.registerForm=this.formBuilder.group({
      //id:['1234',[Validators.required,Validators.pattern("^[1-9]{4}$")]],
      username:['',[Validators.required,Validators.pattern("^[A-Za-z0-9]{8}$")]],
      password:['',[Validators.required,Validators.pattern("^[A-Za-z0-~`!@#$%^&*-_+=]{6,14}$")]],
      emailid:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ]],
      mobileNumber:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
      createdatetime:['',Validators.required]

    });
  }
  
  OnSubmit()
  {
    this.submitted=true;
    if(this.registerForm.valid)
    {
      alert('Success!!\n\n')
      this.buyer=new Buyer();
      this.buyer.id='EMARTBUY'+Math.round(Math.random()*100);
      this.buyer.username=this.registerForm.value["username"];
      this.buyer.password=this.registerForm.value["password"];
      this.buyer.mobileNumber=this.registerForm.value["mobileNumber"];
      this.buyer.emailid=this.registerForm.value["emailid"]
      this.buyer.createdatetime=this.registerForm.value["createdatetime"];
      console.log(this.buyer); 
      this.service.RegisterBuyer(this.buyer).subscribe(res=>{
        alert('Registration Successfull');
      },err=>{
        console.log(err);
      })
    }
  }
  get f() { return this.registerForm.controls; }
onReset()
{
  this.submitted=false;
  this.registerForm.reset();
}
}



