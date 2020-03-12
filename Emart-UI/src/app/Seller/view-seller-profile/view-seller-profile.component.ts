import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,Validators} from '@angular/forms';
import { combineLatest } from 'rxjs';
import{Seller}from 'src/app/model/seller';
import{SellerService}from 'src/app/services/seller.service';

@Component({
  selector: 'app-view-seller-profile',
  templateUrl: './view-seller-profile.component.html',
  styleUrls: ['./view-seller-profile.component.css']
})
export class ViewSellerProfileComponent implements OnInit {
  sviewform:FormGroup;
  submitted=false;
  list:Seller[];
  seller:Seller;

  constructor(private formbuilder:FormBuilder,private service:SellerService) { }

  ngOnInit() {
    this.sviewform=this.formbuilder.group({
      id:[''],
      username:[''],
      password:[''],
      emailid:[''],
     ContactNumber:[''],
companyName:[''],
Gstin:[''],
//BriefAboutCompany:[''],
postalAddress:[''],
website:['']

    });
    this.Search();
  }
 
  OnSubmit(){
    this.submitted=true;
  }

  Search()
  {
    let seller=localStorage.getItem('seller')
    this.service.ViewProfile(seller).subscribe(res=>{
      this.seller=res;
      console.log(this.seller);
      this.sviewform.setValue({
        id:this.seller.id,
        username:this.seller.username,
        password:this.seller.password,
        emailid:this.seller.emailid,
ContactNumber:this.seller.contactNumber,
companyName:this.seller.companyName,
Gstin:this.seller.gstin,
//BriefAboutCompany:this.seller.briefAboutCompany,
postalAddress:this.seller.postalAddress,
website:this.seller.website

      })

    })
  }
  getf(){return this.sviewform.controls}
  Update()
  {
    this.seller.id=this.sviewform.value['id'],
    this.seller.username=this.sviewform.value['username'],
    this.seller.password=this.sviewform.value['password'],
    this.seller.companyName=this.sviewform.value['companyName'],
    this.seller.emailid=this.sviewform.value['emailid'],
    this.seller.gstin=this.sviewform.value['Gstin'],
    this.seller.contactNumber=this.sviewform.value['ContactNumber'],
    //this.seller.briefAboutCompany=this.sviewform.value['BreifAboutCompany'],
    this.seller.postalAddress=this.sviewform.value['postalAddress'],
    this.seller.website=this.sviewform.value['website']
    console.log(this.seller);
      this.service.Update(this.seller).subscribe(res=>{
         console.log('Record Updated');
         alert('Record updated');
      },err=>{
        console.log(err);
      })

  }

}
