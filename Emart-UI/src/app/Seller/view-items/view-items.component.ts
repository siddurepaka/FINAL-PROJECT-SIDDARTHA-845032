import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import{SellerService}from 'src/app/services/seller.service';
import{Items}from'src/app/model/items';
import{Seller}from 'src/app/model/seller'


@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {
  list:Items[];
  item:Items;
  viewform:FormGroup;
  isShow:boolean=true;
  image:string;
  submitted=false;

  constructor(private service:SellerService,private formBuilder:FormBuilder) { 
    let seller=localStorage.getItem('seller')
    this.service.ViewItems(seller).subscribe(res=>
      {
        this.list=res;
        console.log(this.list);
      },
      err=>{
        console.log(err);
      });
 
  }
  

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
      remarks:[''],
      image:[''],
    });
  
  }
  ViewItems()
  { 
    let seller=localStorage.getItem('seller')
    this.service.ViewItems(seller).subscribe(res=>
      {
        this.list=res;
        console.log(this.list);
      },
      err=>{
        console.log(err);
      });
  }
  Update()
  {
    let item=new Items();
    //console.log(item);
    
    item.id=this.viewform.value["id"];
    item.categoryId=this.viewform.value["categoryId"];
    item.sellerid=this.viewform.value["sellerid"];
    item.subCategoryId=this.viewform.value["subcategoryId"]
    item.itemName=this.viewform.value["itemName"];

    item.price=Number(this.viewform.value["price"]);
    item.stockNumber=Number(this.viewform.value["stockNumber"]);
     item.itemDescription=this.viewform.value["itemDescription"];
    item.remarks=this.viewform.value["remarks"];
    // this.item.image=this.viewform.value["image"];
    this.item.image=this.image;
this.service.UpdateItems(item).subscribe(res=>{console.log('Record updated')})
    console.log(this.item);
   
  }
  Delete(id:string)
  {
    
    this.service.DeleteItem(id).subscribe(res=>{
      alert('Record Deleted');
    }),
    err=>{
      console.log(err);
    }
  }

  GetItem(itemid:string)
 {
     this.service.GetItem(itemid).subscribe(res=>
        {
          this.item=res;
          console.log("get");
          console.log(this.item);
          console.log('Id Found');
          //console.log(res);
          this.viewform.setValue(
            {
             
            id:this.item.id,
              itemName:this.item.itemName,
              price:this.item.price,
              itemDescription:this.item.itemDescription,
              stockNumber:this.item.stockNumber,
              sellerid:this.item.sellerid,
              categoryId:this.item.categoryId,
              subcategoryId:this.item.subCategoryId,
              remarks:this.item.remarks,
              image:this.item.image
              
            }
          )
        },
        err=>
        {
          console.log(err);
        }
      )
     
    }
    fileEvent(event){
      this.image = event.target.files[0].name;
      console.log(this.image);
  }
  get f() { return this.viewform.controls; }

   
 



}
