import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuyerLandingPageComponent } from './Buyer/buyer-landing-page/buyer-landing-page.component';
import { SearchComponent } from './Buyer/search/search.component';
import { ViewCartComponent } from './Buyer/view-cart/view-cart.component';
import { PurchaseHistoryComponent } from './Buyer/purchase-history/purchase-history.component';
import { BuyProductComponent } from './Buyer/buy-product/buy-product.component';
import { ViewProfileComponent } from './Buyer/view-profile/view-profile.component';
import { SellerLandingPageComponent } from './Seller/seller-landing-page/seller-landing-page.component';
import { AddItemsComponent } from './Seller/add-items/add-items.component';
import { ViewItemsComponent } from './Seller/view-items/view-items.component';
import { ViewReportsComponent } from './Seller/view-reports/view-reports.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { BlockUnblockBuyerComponent } from './Admin/block-unblock-buyer/block-unblock-buyer.component';
import { BlockUnblockSellerComponent } from './Admin/block-unblock-seller/block-unblock-seller.component';
import { AddCategoryComponent } from './Admin/add-category/add-category.component';
import { AddSubCategoryComponent } from './Admin/add-sub-category/add-sub-category.component';
import { LoginComponent } from './Accounts/login/login.component';
import { RegisterSellerComponent } from './Accounts/register-seller/register-seller.component';
import { RegisterBuyerComponent } from './Accounts/register-buyer/register-buyer.component';
import { HomeComponent } from './Accounts/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BuyerLandingPageComponent,
    SearchComponent,
    ViewCartComponent,
    PurchaseHistoryComponent,
    BuyProductComponent,
    ViewProfileComponent,
    SellerLandingPageComponent,
    AddItemsComponent,
    ViewItemsComponent,
    ViewReportsComponent,
    AdminComponent,
    BlockUnblockBuyerComponent,
    BlockUnblockSellerComponent,
    AddCategoryComponent,
    AddSubCategoryComponent,
    LoginComponent,
    RegisterSellerComponent,
    RegisterBuyerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
