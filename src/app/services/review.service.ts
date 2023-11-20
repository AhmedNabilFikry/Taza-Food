import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private apiUrl = 'http://localhost:5035/api/Review/GetReviews';

  constructor(private http: HttpClient) {}

  getReviews(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
addreviwe(content: string) :Observable<any>{
  let params= new HttpParams()
  .set('content',content);

return this.http.post("http://localhost:5035/api/Review/AddReview",{}, ({params:params}));

}
}
