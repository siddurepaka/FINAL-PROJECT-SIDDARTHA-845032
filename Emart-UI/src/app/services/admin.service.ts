import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from "Rxjs";
import{Category}from 'src/app/model/category';
import{SubCategory}from 'src/app/model/sub-category';
const Requestheaders={headers:new HttpHeaders({
  'Content-Type':'application/json',
})}


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url:string='http://localhost:57323/Admin/'

  constructor(private http:HttpClient) { }
  public AddCategory(item:Category):Observable<any>
  {
    return this.http.post<any>(this.url+'AddCategory',JSON.stringify(item),Requestheaders)
  }
  public AddSubCategory(item:SubCategory):Observable<any>
  {
    return this.http.post<any>(this.url+'AddSubCategory',JSON.stringify(item),Requestheaders)
  }
  public GetAllCategories():Observable<any>
  {
    return this.http.get<any>(this.url+'viewcategory',Requestheaders);
  }


}
