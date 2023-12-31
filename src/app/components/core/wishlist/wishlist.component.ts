import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';
import { ApiProductService } from 'src/app/services/api-product.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishlist: Iproduct[] = [];

  constructor(private wishlistService: WishlistService) {}

  ngOnInit(): void {
    this.wishlist = this.wishlistService.getWishlist();
    console.log(this.wishlist);
  }

  removeFromWishlist(product: Iproduct): void {
    this.wishlistService.removeFromWishlist(product);
    this.wishlist = this.wishlistService.getWishlist();
  }
}
