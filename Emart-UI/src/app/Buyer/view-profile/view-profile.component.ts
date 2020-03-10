import { Component, OnInit } from '@angular/core';
import { Buyer } from 'src/app/model/buyer';
import { BuyerService } from 'src/app/services/buyer.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { identifierModuleUrl } from '@angular/compiler';


@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  editform:FormGroup;
  submitted=false;
  Buyer:Buyer;
  list:Buyer[];

  constructor(private formbuilder:FormBuilder,private service:BuyerService) { }

  ngOnInit() {
    this.editform=this.formbuilder.group({
      id:[''],
      username:[''],
      emailid:[''],
      mobileNumber:[''],
      password:['']
     
      
    });
    this.viewprofile();
  }
  viewprofile()
  {
      let id=localStorage.getItem("buyer")
      this.service.GetById(id).subscribe(res=>{this.Buyer=res;
      console.log(this.Buyer)
      this.editform.setValue({
        id:this.Buyer.id,
        username:this.Buyer.username,
       emailid:this.Buyer.emailid,
        mobileNumber:this.Buyer.mobileNumber,
        password:this.Buyer.password
        
      })
    });
  }
  get f(){return this.editform.controls;}
  onSubmit()
  {
    this.submitted= true;
    if(this.editform.valid)
    {
      
      this.Buyer.username=this.editform.value["username"];
      this.Buyer.emailid=this.editform.value["emailid"];
      this.Buyer.mobileNumber=this.editform.value["mobileNumber"];
      this.Buyer.id=this.editform.value["id"];
      console.log(this.Buyer)
      this.service.Update(this.Buyer).subscribe(res=>
        {
          console.log('Updated succesfully');
        },err=>{console.log(err)}
  
        )

   
   }
  }


}