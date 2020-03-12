import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder ,Validators} from '@angular/forms';
import { combineLatest } from 'rxjs';
import{BuyerService} from 'src/app/services/buyer.service';
import { Items } from 'src/app/model/items';
import { PurchaseHistory } from 'src/app/model/purchase-history';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {
  buyform:FormGroup;
   constructor(private service :BuyerService,private formBuilder:FormBuilder,private route:Router) { }
   item:Items;
   obj:PurchaseHistory;
   submitted=false;
 
   ngOnInit() {
     this.buyform=this.formBuilder.group({
      transactiontype:['',Validators.required],
      cardnumber:['',Validators.required],
      cvv:['',Validators.required],
      ed:['',Validators.required],
      name:['',Validators.required],
     // date:[''],
      numberofitems:['',Validators.required],
      remarks:['',Validators.required]

     })
     this.item=JSON.parse(localStorage.getItem('item1'));
     console.log(this.item);
     console.log(this.item.id);

  }
  Onsubmit()
  {
    this.submitted=true;
    if(this.buyform.valid)
    {
      alert('Purchase Done Successfully');

    this.obj=new PurchaseHistory();
    this.obj.id='EMTR'+Math.round(Math.random()*1000);
    this.obj.Buyerid=localStorage.getItem('buyer');
    this.obj.Sellerid=this.item.sellerid;
    this.obj.numberofitems=this.buyform.value["numberofitems"];
    this.obj.Itemid=this.item.id;
    this.obj.Transactiontype=this.buyform.value["transactiontype"];
    this.obj.Datetime=new Date();
    this.obj.remarks=this.buyform.value["remarks"];
    console.log(this.obj);
    this.service.BuyItem(this.obj).subscribe(res=>{
      console.log("Purchase was Sucessfull");
    },err=>{
      console.log(err);
    })
  }
   
  }
  Logout(){
    localStorage.clear();
    this.route.navigateByUrl('/login');
  }

}
