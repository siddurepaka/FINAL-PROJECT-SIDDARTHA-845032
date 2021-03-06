import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Items } from 'src/app/model/items';
import{Seller} from 'src/app/model/seller';
const Requestheaders={headers:new HttpHeaders({
  'Content-type':'application/json'
})}


@Injectable({
  providedIn: 'root'
})
export class SellerService {
  url:string='http://localhost:57323/';

  constructor(private http:HttpClient) { }
  public Additems(items:Items):Observable<any>
  {
    return this.http.post(this.url+'Item/AddItems',items,Requestheaders);
  }

  public ViewItems(sellerid:string):Observable<Items[]>
  {
    return this.http.get<Items[]>(this.url+'Item/ViewItems/'+sellerid,Requestheaders);
  }
  public ViewProfile(id:string):Observable<Seller>
  {
      return this.http.get<Seller>(this.url+'Seller/GetProfile/'+id,Requestheaders);
  }
  public Update(seller:Seller):Observable<any>
  {
    return this.http.put<any>(this.url+'Seller/EditProfile',seller,Requestheaders);
  }
  public GetItem(id:string):Observable<any>
  {
    return this.http.get<any>(this.url+'Item/GetItem/'+id,Requestheaders);
  }
  public UpdateItems(items:Items):Observable<any>
  {
    console.log(JSON.stringify(items));
    return this.http.put<any>(this.url+'Item/Updateitems',JSON.stringify(items),Requestheaders);
  }
  public GetCategories():Observable<any>
  {
    return this.http.get<any>(this.url+'Item/GetAllCategories',Requestheaders);
  }
  public GetSubCategories(id:string):Observable<any>
  {
    return this.http.get<any>(this.url+'Item/GetAllSubCategories/'+id,Requestheaders);
  }
  public DeleteItem(id:string):Observable<Items>{
    return this.http.delete<Items>(this.url+'Item/Deleteitem/'+id,Requestheaders);
  }
  public GetReports(sellrid:string):Observable<any>{
    return this.http.get<any>(this.url+'Seller/GetReports/'+sellrid,Requestheaders);
  }
}
