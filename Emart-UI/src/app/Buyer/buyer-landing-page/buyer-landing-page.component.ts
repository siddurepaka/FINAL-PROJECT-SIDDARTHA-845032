import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import{Buyer}from 'src/app/model/buyer';
import{Items}from 'src/app/model/items';
import{BuyerService}from 'src/app/services/buyer.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buyer-landing-page',
  templateUrl: './buyer-landing-page.component.html',
  styleUrls: ['./buyer-landing-page.component.css']
})
export class BuyerLandingPageComponent implements OnInit {
  itemlist:Items[];
  searchform:FormGroup

  constructor(private formbuilder:FormBuilder,private service:BuyerService,private route:Router) {}
    
 

  ngOnInit() {
    this.searchform=this.formbuilder.group({
   // categoryId:[''],
    //subCategoryId:[''],
    //sellerid:[''],
    // price:[''],
    // itemName:[''],
    // itemDescription:[''],
    // stockNumber:[''],
    // remarks:['']
  });
  }
  search(name:string)
  {
    this.service.SearchItemByName(name).subscribe(res=>{
      this.itemlist=res;
      console.log(this.itemlist);
    })


  }


}
