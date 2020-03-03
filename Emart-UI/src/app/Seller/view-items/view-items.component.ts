import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import{SellerService}from 'src/app/services/seller.service';
import{Items}from'src/app/model/items'

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {
  list:Items[];
  items:Items;
  viewform:FormGroup;
  isShow:boolean=true;

  constructor(private service:SellerService,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.viewform=this.formBuilder.group({
      id:[''],
      categoryId:[''],
      subcategoryId:[''],
      sellerid:[''],
      price:[''],
      itemName:[''],
      itemDescription:[''],
      stockNumber:[''],
      remarks:['']
    });
    this.ViewItems();
  }
  ViewItems()
  { 
    this.service.ViewItems("2211").subscribe(res=>
      {
        this.list=res;
        console.log(this.list);
      },
      err=>{
        console.log(err);
      });
  }
  Search1(){
    this.isShow=!this.isShow;
  }
  Search(id:string)
  {
    
    this.service.GetItem(id).subscribe(res=>{
      this.items=res;
      console.log(this.items);
      this.viewform.setValue({
        id:this.items.id,
        categoryId:this.items.categoryId,
        subcategoryId:this.items.subCategoryId,
        sellerid:this.items.sellerid,
        itemName:this.items.itemName,
        price:this.items.price,
        itemDescription:this.items.itemDescription,
        stockNumber:this.items.stockNumber,
        remarks:this.items.remarks
      })
    })
  }
  Update()
  {
    // this.isShow=!this.isShow;
    this.items=new Items();
    this.items.id=this.viewform.value["id"];
    this.items.categoryId=this.viewform.value["categoryId"];
    this.items.subCategoryId=this.viewform.value["subcategoryId"];
    this.items.sellerid=this.viewform.value["sellerid"];
    this.items.itemName=this.viewform.value["itemName"];
    this.items.price=this.viewform.value["price"];
    this.items.itemDescription=this.viewform.value["itemDescription"];
    this.items.stockNumber=this.viewform.value["stockNumber"];
    this.items.remarks=this.viewform.value["remarks"];
    console.log(this.items);
  this.service.UpdateItems(this.items).subscribe(res=>{
    console.log('Record Updated');
    alert('Record Updated');
  }
  ,err=>{
    console.log(err);
  })
  }
  Delete(id:string){
    
    this.service.DeleteItem(id).subscribe(res=>{
      alert('Record Deleted');
    }),
    err=>{
      console.log(err);
    }
  }


}
