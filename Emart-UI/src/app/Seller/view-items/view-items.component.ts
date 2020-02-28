import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import{SellerService}from 'src/app/services/seller.service';
import{Items}from'src/app/model/items'

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {
  list:Items[];
  sellerid:string;

  constructor(private service:SellerService,private formBuilder:FormBuilder) { }

  ngOnInit() {
  }
  ViewItems()
  {
   let id=this.sellerid; 
    this.service.ViewItems(id).subscribe(res=>
      {
        this.list=res;
        console.log(this.list);
      },
      err=>{
        console.log(err);
      });
  }



}
