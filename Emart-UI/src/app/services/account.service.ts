import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import{Observable} from 'Rxjs';
import{Buyer} from 'src/app/model/buyer';
import{Seller} from 'src/app/model/seller';
const Requestheaders={headers:new HttpHeaders({
  'Content-type':'application/json'
})}
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  url:string='http://localhost:57323/Account/'
  constructor(private http:HttpClient) { }
  public RegisterBuyer(buyer:Buyer):Observable<any>
  {
      return this.http.post<any>(this.url+'RegisterBuyer',buyer,Requestheaders);
  }
  public RegisterSeller(seller:Seller):Observable<any>
  {
    return this.http.post<any>(this.url+'RegisterSeller',seller,Requestheaders);
  }
  public viewcategory():Observable<any>
  {
    return this.http.get<any>(this.url+'viewcategory',Requestheaders);
  }

}
