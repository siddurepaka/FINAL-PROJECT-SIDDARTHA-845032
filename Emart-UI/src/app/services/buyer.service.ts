import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import{Observable} from 'Rxjs';
import{Buyer} from 'src/app/model/buyer';
import { Items } from 'src/app/model/items';
import { PurchaseHistory } from '../model/purchase-history';
import { Cart } from '../model/cart';
const Requestheaders={headers:new HttpHeaders({
  'Content-type':'application/json'
  
})}

@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  url:string='http://localhost:57323/Buyer/'

  constructor(private http:HttpClient) { }
  public SearchItemByName(item:string ):Observable<any>
  {
    return this.http.get(this.url+'SearchItemByName/'+item,Requestheaders)
  }
  public BuyItem(obj:PurchaseHistory):Observable<any>{
    return this.http.post<any>(this.url+'BuyItem',obj,Requestheaders);
  }
  public GetCategories():Observable<any>{
    return this.http.get<any>(this.url+'GetCategories',Requestheaders);
  }
  public GetItemByCategoryId(id:string):Observable<any>{
    return this.http.get<any>(this.url+'SearchItemByCategory/'+id,Requestheaders);
  }
  public AddtoCart(cart:Cart):Observable<any>{
    return this.http.post<any>(this.url+'AddtoCart',cart,Requestheaders);
  }
  public GetCartItems():Observable<any>
  {
    return this.http.get<any>(this.url+'GetCartItems',Requestheaders);
  }
  public GetAllItems():Observable<any>{
    return this.http.get<any>(this.url+'GetAllItems',Requestheaders);
  }
  public GetById(id:any):Observable<Buyer>
  {
      return this.http.get<Buyer>(this.url+'GetProfile/'+id,Requestheaders);
  }
  public Update(seller:Buyer):Observable<Buyer>
  {
    return this.http.put<Buyer>(this.url+'EditProfile',seller,Requestheaders);
  }
 



}
