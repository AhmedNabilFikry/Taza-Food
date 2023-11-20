import { Component } from '@angular/core';
import { ApiProductService } from 'src/app/services/api-product.service';
import { AuthinticationService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  cartItemCount = 0;
  islogin:boolean=false;
  constructor(private cartService: ApiProductService , private  _login:AuthinticationService) {
    const cartCount = localStorage.getItem('cartCount');
    this.cartItemCount = cartCount ? parseInt(cartCount, 10) : 0;

    cartService.cartItems$.subscribe(count => {
      this.cartItemCount = count;
      localStorage.setItem('cartCount', count.toString());
    });

    if(_login.userdata.getValue()!=null){
      this.islogin=true;
      }
      else{

       this.islogin=false;
      }

  }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((count) => {
      this.cartItemCount = count;
    });
  }
  Logout(){
    this._login.signout();
  }
}
