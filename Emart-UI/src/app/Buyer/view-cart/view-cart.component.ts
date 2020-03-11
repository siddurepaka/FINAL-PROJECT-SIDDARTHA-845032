import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/cart';
import { Items } from 'src/app/model/items';
import{BuyerService}from 'src/app/services/buyer.service'


@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {
  cartlist:Cart[]
 item:Items
  

  constructor(private route:Router,private service:BuyerService) {
    if(localStorage.getItem('buyer'))
    {
    let buyerid=localStorage.getItem('buyer');
    this.service.GetCartItems(buyerid).subscribe(res=>{
      this.cartlist=res;
      console.log(this.cartlist)
    },err=>{
      console.log(err)
    })
    }
    else 
    {
      alert(' please login in first');
      this.route.navigateByUrl('home');
    }
  }

  ngOnInit() {
  }
  BuyNow(item1:Items){
    console.log(this.item);
    this.item=item1,
    localStorage.setItem('item1',JSON.stringify(this.item));
    this.route.navigateByUrl('/buyer-landing-page/buy-product');

  }
  Remove(cartid:string){
    let id=cartid;
    this.service.RemoveCartItem(id).subscribe(res=>{
      console.log("Item removed from the cart");
      alert('Item deleted')
    })
  }
  Logout(){
    localStorage.clear();
    this.route.navigateByUrl('index');
  }


}
