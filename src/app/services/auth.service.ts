import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthinticationService {
  constructor(private _httpclient:HttpClient,private router:Router) {
    if(localStorage.getItem("userToken")){
      this.savedata()
    }
    else if(localStorage.getItem('useradmin') != null){
      this.savecurrentadmin();
     }
  }

  currentuseradmin = new BehaviorSubject(null);
  userdata =new BehaviorSubject(null)

  savedata(){
    let encodingdata=JSON.stringify(localStorage.getItem("userToken"))
    let decodingdata:any=jwtDecode(encodingdata)
    this.userdata.next(decodingdata)
  }

  signin(formdata:object):Observable<any>{
    return this._httpclient.post('http://localhost:5035/api/Account/Register', formdata)
  }
  login(formdata:object):Observable<any>{
    return this._httpclient.post('http://localhost:5035/api/Account/Login',formdata)
  }

  signout(){
    localStorage.removeItem("userToken")
    this.userdata.next(null);
    this.router.navigate(['/login'])
  }

  savecurrentadmin(){
    let token:any=localStorage.getItem('useradmin');
    this.currentuseradmin.next(jwtDecode(token));
    console.log(this.currentuseradmin)
  }
}
