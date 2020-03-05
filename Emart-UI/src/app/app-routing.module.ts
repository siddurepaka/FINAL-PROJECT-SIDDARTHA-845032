import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyerLandingPageComponent } from './Buyer/buyer-landing-page/buyer-landing-page.component';
import { BuyProductComponent } from './Buyer/buy-product/buy-product.component';
import { PurchaseHistoryComponent } from './Buyer/purchase-history/purchase-history.component';
import { SearchComponent } from './Buyer/search/search.component';
import { ViewCartComponent } from './Buyer/view-cart/view-cart.component';
import { ViewProfileComponent } from './Buyer/view-profile/view-profile.component';
import { SellerLandingPageComponent } from './Seller/seller-landing-page/seller-landing-page.component';
import { AddItemsComponent } from './Seller/add-items/add-items.component';
import { ViewItemsComponent } from './Seller/view-items/view-items.component';
import { ViewReportsComponent } from './Seller/view-reports/view-reports.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddSubCategoryComponent } from './Admin/add-sub-category/add-sub-category.component';
import { BlockUnblockBuyerComponent } from './Admin/block-unblock-buyer/block-unblock-buyer.component';
import { BlockUnblockSellerComponent } from './Admin/block-unblock-seller/block-unblock-seller.component';
import { LoginComponent } from './Accounts/login/login.component';
import { RegisterBuyerComponent } from './Accounts/register-buyer/register-buyer.component';
import { RegisterSellerComponent } from './Accounts/register-seller/register-seller.component';
import{HomeComponent} from './Accounts/home/home.component'

const routes: Routes = [
  {path:'buyer-landing-page',component:BuyerLandingPageComponent,children:[
    {path:'buy-product',component:BuyProductComponent},
    {path:'purchase-history',component:PurchaseHistoryComponent},
    {path:'search',component:SearchComponent},
    {path:'view-cart',component:ViewCartComponent},
    {path:'view-profile',component:ViewProfileComponent}
  ]},
  {path:'seller-landing-page',component:SellerLandingPageComponent,children:[
    {path:'add-items',component:AddItemsComponent},
    {path:'view-items',component:ViewItemsComponent},
    {path:'view-seller-profile',component:ViewProfileComponent},
    {path:'view-reports',component:ViewReportsComponent}
  ]},
  {path:'admin',component:AdminComponent,children:[
    {path:'add-category',component:AddCategoryComponent},
    {path:'add-sub-category',component:AddSubCategoryComponent},
    {path:'block-unblock-buyer',component:BlockUnblockBuyerComponent},
    {path:'block-unblock-seller',component:BlockUnblockSellerComponent},
  ]},
  {path:'home',component:HomeComponent,children:[
    {path:'login',component:LoginComponent},
  {path:'register-buyer',component:RegisterBuyerComponent},
  {path:'register-seller',component:RegisterSellerComponent}
  ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
