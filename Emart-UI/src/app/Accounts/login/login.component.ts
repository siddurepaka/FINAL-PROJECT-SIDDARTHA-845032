import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Buyer } from 'src/app/model/buyer';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform:FormGroup;
  submitted=false;
  item:Buyer;
  
    constructor(private formbuilder:FormBuilder) {
      this.item=new Buyer();
  
     }
  
    ngOnInit() {
      this.loginform=this.formbuilder.group({
        username:['',Validators.required],
        password:['',Validators.required]
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
        alert("Form is Validated");
        console.log(this.loginform.value);
        console.log(JSON.stringify(this.loginform.value))
        console.log(this.loginform.value["username"])
        console.log(this.loginform.value["password"])
        this.item.username=this.loginform.value["username"]
        this.item.password=this.loginform.value["password"]
        console.log(this.item)
  
      }
    }
    get f() {return this.loginform.controls;}
    onReset()
    {
      this.submitted=false;
      this.loginform.reset();
    }
  
  }
  
  