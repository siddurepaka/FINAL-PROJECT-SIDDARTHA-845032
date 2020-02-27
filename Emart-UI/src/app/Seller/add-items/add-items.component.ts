import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Items } from 'src/app/model/items';
import { combineLatest } from 'rxjs';
import { SellerService } from 'src/app/services/seller.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  additemform:FormGroup;
  submitted=false;
  item:Items;
  


  constructor(private formbuilder:FormBuilder,private service:SellerService,private route:Router) {
    this.item=new Items();
  }

  ngOnInit() {
    this.additemform=this.formbuilder.group({
    id:['',Validators.required],
    cid:['',Validators.required],
    scid:['',Validators.required],
    sellerid:['',Validators.required],
    price:['',Validators.required],
    itemname:['',Validators.required],
    description:['',Validators.required],
    stocknumber:['',Validators.required],
    remarks:['',Validators.required],
    });
  }
   OnSubmit()
  {
    this.submitted=true;
    if(this.additemform.valid)
    {
      alert('Success!!\n\n')
      this.item.id=this.additemform.value['id'],
      this.item.categoryid=this.additemform.value['cid'],
    this.item.subcategoryid=this.additemform.value['scid'],
    this.item.sellerid=this.additemform.value['sellerid'],
    this.item.price=this.additemform.value['price'],
    this.item.itemname=this.additemform.value['itemname'],
    this.item.description=this.additemform.value['description'],
    this.item.stocknumber=this.additemform.value['stocknumber'],
    this.item.remarks=this.additemform.value['remarks']
    console.log(this.item); 
    this.service.AddItems(this.item).subscribe(res=>{
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
Search()
{
  let id1=this.additemform.value["id"];
  console.log(id1);
  this.service.GetItem(id1).subscribe(res=>{
    this.item=res;
    console.log(this.item);
    this.additemform.setValue({
      id:this.item.id,
      cid:this.item.categoryid,
      scid:this.item.subcategoryid,
      sellerid:this.item.sellerid,
      itemname:this.item.itemname,
      price:this.item.price,
      description:this.item.description,
      stocknumber:this.item.stocknumber,
      remarks:this.item.remarks
    })
  })

}
Update()
{
  this.item=new Items();
  this.item.id=this.additemform.value['id'],
      this.item.categoryid=this.additemform.value['cid'],
    this.item.subcategoryid=this.additemform.value['scid'],
    this.item.sellerid=this.additemform.value['sellerid'],
    this.item.price=this.additemform.value['price'],
    this.item.itemname=this.additemform.value['itemname'],
    this.item.description=this.additemform.value['description'],
    this.item.stocknumber=this.additemform.value['stocknumber'],
    this.item.remarks=this.additemform.value['remarks']
    console.log(this.item);
    this.service.UpdateItems(this.item).subscribe(res=>{
      console.log('Record Updated');
    }
    ,err=>{
      console.log(err);
    })
  
}

}



