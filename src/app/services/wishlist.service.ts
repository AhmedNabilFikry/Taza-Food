import { Injectable, OnInit } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { BehaviorSubject, Observable } from 'rxjs';
import { startWith } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private readonly wishlistKey = 'wishlist';

  addToWishlist(product: Iproduct): void {
    const wishlist = this.getWishlist();
    wishlist.push(product);
    this.updateWishlist(wishlist);
  }
  isProductInWishlist(product: Iproduct): boolean {
    const wishlist = this.getWishlist();
    return wishlist.some(p => p.id === product.id);
  }
  removeFromWishlist(product: Iproduct): void {
    const wishlist = this.getWishlist();
    const index = wishlist.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      wishlist.splice(index, 1);
      this.updateWishlist(wishlist);
    }
  }

  getWishlist(): Iproduct[] {
    const wishlistJson = localStorage.getItem(this.wishlistKey);
    return wishlistJson ? JSON.parse(wishlistJson) : [];
  }

  private updateWishlist(wishlist: Iproduct[]): void {
    localStorage.setItem(this.wishlistKey, JSON.stringify(wishlist));
  }

  saveWishlist(wishlist: Iproduct[]): void {
    localStorage.setItem(this.wishlistKey, JSON.stringify(wishlist));
  }
  getWishlistCount(): number {
    const wishlist = this.getWishlist();
    return wishlist.length;
  }

  clearWishlist(): void {
    localStorage.removeItem(this.wishlistKey);
  }

}
