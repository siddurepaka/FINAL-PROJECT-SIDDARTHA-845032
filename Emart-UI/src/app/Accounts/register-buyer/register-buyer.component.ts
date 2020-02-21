import { Component, OnInit } from '@angular/core';
import{FormBuilder,Validators,FormGroup} from '@angular/forms';
import { Buyer } from 'src/app/model/buyer';

@Component({
  selector: 'app-register-buyer',
  templateUrl: './register-buyer.component.html',
  styleUrls: ['./register-buyer.component.css']
})
export class RegisterBuyerComponent implements OnInit {
  registerForm:FormGroup;
  submitted=false;
  //lists:Buyer[]=[];
  item:Buyer;
  id:number;
  username:string;
  password:string;
  emailid:string;
  mobile:number;
  createdatetime:Date;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.registerForm=this.formBuilder.group({
      id:['',Validators.required,Validators.pattern("^[E][1-9]{4}$")],
      username:['',[Validators.required,Validators.pattern("^[A-Za-z0-9]{8}$")]],
      password:['',[Validators.required,Validators.pattern("^[A-Za-z0-~`!@#$%^&*-_+=]{6,14}$")]],
      emailid:['',[Validators.required,Validators.email]],
      mobile:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
      createdatetime:['',Validators.required]

    });
  }
  get f(){return this.registerForm.controls;}
  OnSubmit()
  {
    this.submitted=true;
    if(this.registerForm.valid)
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
