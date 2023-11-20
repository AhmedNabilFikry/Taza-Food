import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { ApiProductService } from 'src/app/services/api-product.service';
import { AuthinticationService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _authintication:AuthinticationService,private _roouter:Router ,
    private _appcomponent :AppComponent , private apiservice:ApiProductService) {
    this._appcomponent.showfooter = false;
    this._appcomponent.hiddennavbarinreg = false;
  }
ngOnDestroy(){
  this._appcomponent.showfooter = true;
  this._appcomponent.hiddennavbarinreg = true;
}

  showfooter:Boolean = false ;

  isloading:boolean=false;
  loading:boolean = false;
  errormessege:string="";
  loginform: FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(15)])
  });

  onlogin(dataform:FormGroup){
    if(this.loginform.valid){
      this.isloading=true
      this._authintication.login(dataform.value).subscribe({
        next:(response)=>{
          if(response.message =='Succeeded' && response.accountRole=='User'){
            this.isloading=false
            localStorage.setItem('userToken',response.user.token)
            console.log(response.user.token)
            this._authintication.savedata()
            this.apiservice.SaveUserId()
            this._roouter.navigate(['/home'])
          }
          else if(response.message =='Succeeded'&& response.accountRole=='Admin'){
            localStorage.setItem('useradmin',response.user.token)
           this._authintication.savecurrentadmin();
          console.log("hallo")
           this._roouter.navigate(['/home'])
           }
          else{
            this.errormessege=response.messege;
            this.isloading=false
          }
        }
      })
    }
  }
  onRegister(){
    this.loading = true;
    this._roouter.navigate(['/register'])
  }
}
