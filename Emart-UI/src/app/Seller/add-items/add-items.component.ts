import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Items } from 'src/app/model/items';
import { combineLatest } from 'rxjs';
import { SellerService } from 'src/app/services/seller.service';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { SubCategory } from 'src/app/model/sub-category';


@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  additemform:FormGroup;
  submitted=false;
  item:Items;
  categorylist:Category[];
  subcategorylist:SubCategory[];
  categoryId:string;
  image:string;
  


  constructor(private formbuilder:FormBuilder,private service:SellerService,private route:Router) {
    this.service.GetCategories().subscribe(res=>{
      this.categorylist=res;
      console.log(this.categorylist);
    })

    this.item=new Items();
  }

  ngOnInit() {
    this.additemform=this.formbuilder.group({
//id:['',Validators.required],
    categoryId:['',Validators.required],
    subCategoryId:['',Validators.required],
   sellerid:[''],
    price:['',Validators.required],
    itemName:['',Validators.required],
    itemDescription:['',Validators.required],
    stockNumber:['',Validators.required],
    remarks:['',Validators.required],
    image:['']
    });
  }
   OnSubmit()
  {
    this.submitted=true;
    if(this.additemform.valid)
    {
      alert('Success!!\n\n')
      this.item.id='I'+Math.round(Math.random()*1000);
      this.item.categoryId=this.additemform.value['categoryId'],
    this.item.subCategoryId=this.additemform.value['subCategoryId'],
    this.item.sellerid=localStorage.getItem('seller'),
    this.item.price=Number(this.additemform.value['price']),
    this.item.itemName=this.additemform.value['itemName'],
    this.item.itemDescription=this.additemform.value['itemDescription'],
    this.item.stockNumber=Number(this.additemform.value['stockNumber']),
    this.item.remarks=this.additemform.value['remarks'],
    this.item.image=this.image;
    console.log(this.item); 
    this.service.Additems(this.item).subscribe(res=>{
      alert('Item Added Successfully');
    },err=>{
      console.log(err);
    })
    }
  }
  get f() { return this.additemform.controls; }
onReset()
{
this.submitted=false;
this.additemform.reset();
}
GetAllSubCategory()
  {
    let categoryId=this.additemform.value["categoryId"];
    console.log(categoryId);
    this.service.GetSubCategories(categoryId).subscribe(res=>{
      this.subcategorylist=res;
      console.log(this.subcategorylist);
    })
  }
  fileEvent(event){
    this.image = event.target.files[0].name;
}



}



