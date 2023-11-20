import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iorder } from '../models/iorder';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseUrl:string = "http://localhost:5035/api/Order/GetAllOrders";

  constructor(private http:HttpClient) {}
  getorders()
    {return this.http.get<Iorder[]>(this.baseUrl);}

}
