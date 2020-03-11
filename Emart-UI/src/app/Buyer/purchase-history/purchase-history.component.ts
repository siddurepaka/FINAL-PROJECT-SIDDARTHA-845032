import { Component, OnInit } from '@angular/core';
import{BuyerService}from'src/app/services/buyer.service';
import { PurchaseHistory } from 'src/app/model/purchase-history';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css']
})
export class PurchaseHistoryComponent implements OnInit {
  phlist:PurchaseHistory[];
  count:number;
  
  constructor(private route:Router,private service:BuyerService) { 
    if(localStorage.getItem('buyer')){

      let bid=localStorage.getItem('buyer');
      this.service.GetPurchaseHistory(bid).subscribe(res=>{
        this.phlist=res;
        console.log(this.phlist);
      })
      this.service.GetCount(bid).subscribe(res=>{
        this.count=res;
        console.log(this.count);
      })
    }
    else{
      alert('please login With your Credentials');
      this.route.navigateByUrl('/home/login');
    }
  }

  ngOnInit() {
  }
  Logout(){
    localStorage.clear();
    this.route.navigateByUrl('/home/login');
  }

}
