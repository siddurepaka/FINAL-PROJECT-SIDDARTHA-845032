import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,Validators} from '@angular/forms';
import{Buyer}from 'src/app/model/buyer';
import{Items}from 'src/app/model/items';
import{BuyerService}from 'src/app/services/buyer.service';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/category';
import { ThrowStmt } from '@angular/compiler';
import { Cart } from 'src/app/model/cart';
import { Token } from 'src/app/model/token';



@Component({
  selector: 'app-buyer-landing-page',
  templateUrl: './buyer-landing-page.component.html',
  styleUrls: ['./buyer-landing-page.component.css']
})
export class BuyerLandingPageComponent implements OnInit {
  itemlist:Items[];
  searchform:FormGroup;
  list:Items[];
  itemname:string;
  item:Items;
  isShow:boolean=true;
  clist:Category[];
  cart:Cart;
  category:string;


  constructor(private formbuilder:FormBuilder,private service:BuyerService,private route:Router) {
    this.service.GetCategories().subscribe(res=>{
      this.clist=res;
      console.log(this.clist);
    })
    this.service.GetAllItems().subscribe(res=>{
      this.list=res;
      console.log(this.list);
      
    })
  }
    
 

  ngOnInit() {
    this.searchform=this.formbuilder.group({
   
  });
  }
  search(name:string)
  {
    this.service.SearchItemByName(name).subscribe(res=>{
      this.itemlist=res;
      console.log(this.itemlist);
    })


  }
  Show(){
    this.isShow=!this.isShow;
  }
  Buy(product:Items){
    console.log(product);
    localStorage.setItem('product',JSON.stringify(product));
    this.route.navigateByUrl('/buy-product');

  }
  SearchByCategory(id:string){
    this.service.GetItemByCategoryId(id).subscribe(res=>{
      this.list=res;
      console.log(this.list);
    })

  }
  Logout(){
    localStorage.clear();
    this.route.navigateByUrl('/login')
  }
  AddtoCart(item2:Items){
    console.log(item2);
   this.cart=new Cart();
   this.cart.cartid='EMCR'+Math.round(Math.random()*100);
   this.cart.id=item2.id;
   this.cart.itemname=item2.itemName;
   this.cart.categoryid=item2.categoryId;
   this.cart.Subcategoryid=item2.subCategoryId;
   this.cart.sellerid=item2.sellerid;
   this.cart.stocknumber=item2.stockNumber;
   this.cart.price=item2.price;
   this.cart.itemdescription=item2.itemDescription;
   this.cart.remarks=item2.remarks;
   this.cart.image=item2.image;
   this.cart.buyerid= localStorage.getItem('buyer');
   console.log(this.cart);
   this.service.AddtoCart(this.cart).subscribe(res=>{
     console.log("Record added To Cart");
     alert('Item has been Added To Cart');
   })
  }


}
