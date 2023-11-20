import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icategory } from '../models/icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
// ///////////////////////////////////
    //===Get all Category
    baseUrl:string = "http://localhost:5035/api/Category/GetCategories";
    constructor(private http:HttpClient) {}
      getCategories():Observable<Icategory[]>
      {return this.http.get<Icategory[]>(this.baseUrl);}
      /////////////////////////////////
      //===Get all Category
      baseUrladd:string ="http://localhost:5035/api/Category/AddCategory"
      add(cate:Icategory){
        return this.http.post(this.baseUrladd,cate)}
        ///////////////////////////////
        GetCategoryById(id:number)
        {return this.http.get<Icategory>(`${this.baseUrl}/{id}`)}
        //////////////////////////////
        //===UpDate Category
        Update(id:number,cate:Icategory): Observable<any>{
        return this.http.put(`http://localhost:5035/api/Category/updteCategory?id=${id}`,cate)}
        /////////////////////////////
        //===Delete Category
        DeleteCategory(id:number){
        return this.http.delete(`http://localhost:5035/api/Category/DeleteCtecory?id=${id}`)}
}
