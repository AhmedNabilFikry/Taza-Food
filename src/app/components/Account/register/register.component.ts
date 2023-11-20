import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AuthinticationService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  showfooter:Boolean = false;
  hiddennavbarinreg:Boolean = false;
  constructor(
    private _Authintication: AuthinticationService,
    private _router: Router , private _appcomponent:AppComponent
  ) {this._appcomponent.showfooter=false;
    this._appcomponent.hiddennavbarinreg=false; }

  isloading: Boolean = false;
  errormessege: string = '';
  regitretionform: FormGroup = new FormGroup({
    FirstName: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(15),
    ]),
    LastName: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(15),
    ]),
    PhoneNumber: new FormControl(null, [
      Validators.required,
      Validators.maxLength(11),
    ]),
    Email: new FormControl(null, [Validators.required, Validators.email]),
    Password: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(15),
    ]),
    Country: new FormControl(null, Validators.required),
    City: new FormControl(null, Validators.required),
    Street: new FormControl(null, Validators.required),
  });

  onregister(dateform: FormGroup) {
    this.isloading = true;

    if (this.regitretionform.valid) {
      this._Authintication.signin(dateform.value).subscribe({
        next: (response) => {
          this.isloading = false;
          if (response.messege === 'Added Succeeded') {
            this._router.navigate(['/login']);
            this.isloading = false;
          } else {
            this.errormessege = response.messege;
            this.isloading = false;
          }
        },
      });
    }
  }




}
