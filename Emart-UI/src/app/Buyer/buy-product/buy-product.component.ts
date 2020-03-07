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
 
   ngOnInit() {
     this.buyform=this.formBuilder.group({
      transactiontype:[''],
      cardnumber:[''],
      cvv:[''],
      ed:[''],
      name:[''],
      date:[''],
      numberofitems:[''],
      remarks:['']

     })
     this.item=JSON.parse(localStorage.getItem('item1'));
     console.log(this.item);
     console.log(this.item.id);

  }
  Onsubmit()
  {
    this.obj=new PurchaseHistory();
    this.obj.id='EMTR'+Math.round(Math.random()*1000);
    this.obj.Buyerid=localStorage.getItem('buyerid');
    this.obj.Sellerid=this.item.sellerid;
    this.obj.numberofitems=this.buyform.value["numberofitems"];
    this.obj.Itemid=this.item.id;
    this.obj.Transactiontype=this.buyform.value["transactiontype"];
    this.obj.Datetime=this.buyform.value["date"];
    this.obj.remarks=this.buyform.value["remarks"];
    console.log(this.obj);
    this.service.BuyItem(this.obj).subscribe(res=>{
      console.log("Purchase was Sucessfull");
      alert('Purchase Done Successfully');
    })
   
  }
  Logout(){
    localStorage.clear();
    this.route.navigateByUrl('/login');
  }

}
