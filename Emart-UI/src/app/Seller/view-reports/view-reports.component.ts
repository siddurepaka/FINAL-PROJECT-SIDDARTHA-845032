import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import {SellerService} from 'src/app/services/seller.service';
import{PurchaseHistory}from 'src/app/model/purchase-history';

@Component({
  selector: 'app-view-reports',
  templateUrl: './view-reports.component.html',
  styleUrls: ['./view-reports.component.css']
})
export class ViewReportsComponent implements OnInit {
  plist:PurchaseHistory[];

  constructor(private service:SellerService,private route:Router) {
    if(localStorage.getItem('seller')){

      let sid=localStorage.getItem('seller');
      console.log(sid);
      this.service.GetReports(sid).subscribe(res=>{
        this.plist=res;
        console.log(this.plist);
      })
    }
    else{
      alert('please login With your Credentials');
      this.route.navigateByUrl('/login');
    }
     }
   

  ngOnInit() {
  }

}
