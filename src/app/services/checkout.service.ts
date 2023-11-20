import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChecoutService {

  private apiUrl = 'http://localhost:5035/api/Order/DeliveryMethods'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getAllDeliveryMethods(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
