import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductswithApiService {
//  ////////////////////////////
  //====Get All Products
  baseUrl:string = "http://localhost:5035/api/Product/GetAllProducts";
  constructor(private http:HttpClient) { }
  getAllProducts():Observable<Iproduct[]>
    {return this.http.get<Iproduct[]>(this.baseUrl);}
      ////////////////////////////
  //====Get Product By Id
  baseUrlprodid:string = "http://localhost:5035/api/Product";
  getProductById(id:number):Observable<Iproduct>
    {return this.http.get<Iproduct>(`${this.baseUrlprodid}/{id}`)}
      ////////////////////////////
  //====Add Products
  baseUrladd:string = "http://localhost:5035/api/Product/AddProduct";
  add(prod:Iproduct){
    return this.http.post(this.baseUrladd,prod)}
      ////////////////////////////
  //====Edit Product
  baseUrledit:string = "http://localhost:5035/api/Product";
  edit(id:number,prod:Iproduct){
    return this.http.put(`${this.baseUrledit}/${id}`,prod)}
      ////////////////////////////
  //====Delete Product
  baseUrldelete:string = "http://localhost:5035/api/Product";
  delete(id:number){
    return this.http.delete(`${this.baseUrldelete}/DeleteProduct/${id}`)}
  }
