import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Icart } from 'src/app/models/icart';
import { ApiProductService } from 'src/app/services/api-product.service';
import { AuthinticationService } from 'src/app/services/auth.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-nab-bar',
  templateUrl: './nab-bar.component.html',
  styleUrls: ['./nab-bar.component.css'],
})
export class NabBarComponent implements OnInit {
  wishlistCount = 0;
  cartItemCount = 0;
  islogin: boolean = false;
  showdashbord :boolean = false ;
  constructor(
    private cartService: ApiProductService,
    private _login: AuthinticationService,
    private wishlistService: WishlistService
  ) {
    const cartCount = localStorage.getItem('cartCount');
    this.cartItemCount = cartCount ? parseInt(cartCount, 10) : 0;

    cartService.cartItems$.subscribe((count) => {
      this.cartItemCount = count;
      localStorage.setItem('cartCount', count.toString());
    });
    if (_login.userdata.getValue() != null) {
      this.islogin = true;
    } else {
      this.islogin = false;
    }
    _login.currentuseradmin.subscribe((response) => {
      if (_login.currentuseradmin.getValue() != null) {
        this.islogin = true;

        this.showdashbord = true;
      }
      else {
        this.showdashbord = false
        this.islogin = false;
      }
    })

  }

  ngOnInit(): void {
    this.cartService.cartItems$.subscribe((count) => {
      this.cartItemCount = count;
      this.updateWishlistCount();
    });
  }
  Logout() {
    this._login.signout();
    this.showdashbord = false;
  }
  updateWishlistCount(): void {
    this.wishlistCount = this.wishlistService.getWishlistCount();
  }
}
