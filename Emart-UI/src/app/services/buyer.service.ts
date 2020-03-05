import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http';
import{Observable} from 'Rxjs';
import{Buyer} from 'src/app/model/buyer';
import { Items } from 'src/app/model/items';
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
}
