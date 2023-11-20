import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Iproduct } from '../models/iproduct';
import { Icategory } from '../models/icategory';
import { Ipagination } from '../models/ipagination';
import { HttpHeaders } from '@angular/common/http';
import { Icart, Icartitem } from '../models/icart';
import { Ireview } from '../models/ireview';
import { AuthinticationService } from './auth.service';
import { jwtDecode } from 'jwt-decode';
@Injectable({
  providedIn: 'root',
})
export class ApiProductService {
  baseUrl: string = 'http://localhost:5035/api/';
  constructor(private http: HttpClient ,private authService:AuthinticationService) {
    this.initializeCartCount();
  }
  getAllProducts(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(this.baseUrl + 'product');
  }
  getProductById(id: number): Observable<Iproduct> {
    return this.http.get<Iproduct>(this.baseUrl + 'Product/' + id);
  }
  getAllCategories(): Observable<Icategory[]> {
    return this.http.get<Icategory[]>(this.baseUrl + 'Category/GetCategories');
  }
  Searching(query: string) {
    return this.http.get<Iproduct[]>(
      `http://localhost:5035/api/Product/ProductsPagination?Search=${query}`
    );
  }
  FilterProducts(pageindex: number, pagesize: number): Observable<Ipagination> {
    const url = `http://localhost:5035/api/Product/ProductsPagination?pageindex=${pageindex}&pagesize=${pagesize}`;
    return this.http.get<Ipagination>(url);
  }
  getProductsByCategory(category: string): Observable<any> {
    const url = `${this.baseUrl}Product/GetProductsFillterBy/`;
    const params = new HttpParams().set('category', category);
    return this.http.get(url, { params });
  }
  getTopRatedProducts(pageIndex: number, pageSize: number): Observable<any> {
    const url = `${this.baseUrl}Product/ProductsPagination`;

    // Set the parameters for pagination
    const params = new HttpParams()
      .set('FilterByRate', '4') // Add your filter parameters
      .set('pageIndex', pageIndex.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<any>(url, { params });
  }

  GetUserID = new BehaviorSubject(null)
  SaveUserId(){
    let encodingdata=JSON.stringify(localStorage.getItem("userToken"))
    let decodingdata:any=jwtDecode(encodingdata)
    this.GetUserID.next(decodingdata)
  }
  addToCart(cartItem: any): Observable<any> {
    // const headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   // Authorization: `Bearer ${localStorage.getItem('userToken')}`
    //   Authorization: `Bearer ${this.GetUserID}`
    // });
    const userId = this.authService.savedata();
    const url = `${this.baseUrl}CartItem/AddToCart`;
    // return this.http.post(url, cartItem, { headers });
    return this.http.post(url, cartItem);
  }
  getCartItems(id: string): Observable<Icart> {
    return this.http.get<Icart>(`${this.baseUrl}CartItem/GetCart?id=${id}`);
  }
  removeFromCart(productId: number): Observable<any> {
    const userId = 'yousseftaha@gmail.com'; //this.authService.getCurrentUserId();
    if (!userId) {
      return new Observable();
    }
    const url = `${this.baseUrl}CartItem/RemoveFromCart?productId=${productId}`;
    return this.http.delete(url);
  }
  getAllReviews(): Observable<Ireview[]> {
    return this.http.get<Ireview[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }
  private cartItemsSubject = new BehaviorSubject<number>(0);
  cartItems$ = this.cartItemsSubject.asObservable();

  updateCartItemCount(count: number): void {
    this.cartItemsSubject.next(count);
  }

  private initializeCartCount(): void {
    const storedCount = localStorage.getItem('cartCount');
    const count = storedCount ? parseInt(storedCount, 10) : 0;
    this.cartItemsSubject.next(count);
  }
////////////////////////////pagination
pagantion(pageIndex:number,pageSize:number): Observable<any> {

  let params= new HttpParams()
  .set('pageIndex',pageIndex)
  .set('Pagesize',pageSize)
  ;

  const urlbase = "http://localhost:5035/api/Product/ProductsPagination"

return this.http.get<any>(urlbase,{params:params});

}











}

// updating the getCartItems when user is logged_in
// getCart(): Observable<any> {
//   const userId = this.authService.getCurrentUserId();
//   if (!userId) {
//     // Handle the case where there is no logged-in user
//     return new Observable(); // Or another appropriate action
//   }

//   const url = `${this.apiUrl}/GetCart?id=${userId}`;
//   return this.http.get(url);
// }

// updateTotalQuantity(cartItems: any[]) {
//   const newTotalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
//   this.totalQuantitySource.next(newTotalQuantity);
// }
