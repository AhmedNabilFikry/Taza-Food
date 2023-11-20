import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../models/iuser';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl:string = "http://localhost:5035/api/Account/GetAllUsers";
  constructor(private http:HttpClient) {}

    getusers():Observable<Iuser[]>
    {return this.http.get<Iuser[]>(this.baseUrl);}


    baseUrladdadmin:string = "http://localhost:5035/api/Account/AddAdmin";
    addadmin(admin:Admin)
    {return this.http.post(this.baseUrladdadmin,admin)}


}
