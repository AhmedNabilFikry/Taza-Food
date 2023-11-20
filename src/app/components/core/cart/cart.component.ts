import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Icart, Icartitem } from 'src/app/models/icart';
import { ApiProductService } from 'src/app/services/api-product.service';
import { ChecoutService } from 'src/app/services/checkout.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Icart = { id: '', cartItems:[] };
  totalQuantity: number = 0;
  totalPrice: number = 0;
  cartItems$:Icart = { id: '', cartItems:[] };
  constructor(private apiservice:ApiProductService , private checkoutservice:ChecoutService){}
  ngOnInit(): void {
    this.LoadCart();
    this.fetchDeliveryMethods();
  }
  LoadCart(){
     const userId = 'yousseftaha@gmail.com'   //Shouldn't be used here i must use it in the service
    this.apiservice.getCartItems(userId).subscribe({
      next:(data) =>{
        this.cart = data;
        this.calculateTotals();
        this.cartItems$ = data;
        console.log(this.cart);
      },
      error(error) {
        console.error('Error fetching cart items:', error);
      },
    })
  }
  removeProduct(productId:number){
    this.apiservice.removeFromCart(productId).subscribe({
      next:(data)=>{
        console.log('Product removed from cart:', data);
        this.LoadCart();
        },
        error(error) {
          console.error('Error removing product from cart:', error);
          }
          });
        }
        calculateTotals() {
          this.totalQuantity = this.cart.cartItems.reduce(
            (total, item) => total + item.quantity,
            0
          );

          this.totalPrice = this.cart.cartItems.reduce(
            (total, item) => total + item.quantity * item.price,
            0
          );

          // Update the cart count in the CartCountService
          this.apiservice.updateCartItemCount(this.totalQuantity);
        }

        updateQuantity(item: any, newQuantity: number) {
          item.quantity = newQuantity;
          this.calculateTotals();
        }
        Clear(){
            this.cart = {id:'DefaultUserId',cartItems:[]};
            this.LoadCart();
        }
        updateCartItemCount(newItemCount: number): void {
          this.apiservice.updateCartItemCount(newItemCount);
        }

///////////////////////////////checkout functionalities
deliveryMethods: any[] = [];
  selectedMethodId: number = 0 ;
  selectedMethod: any | null = null;
  fetchDeliveryMethods(): void {
    this.checkoutservice.getAllDeliveryMethods().subscribe({
      next: (data) => {
        this.deliveryMethods = data;
        console.log(this.deliveryMethods);
    }
  })
  }
  onMethodSelected(): void {
    // if (!!this.selectedMethod && !!this.selectedMethod.id){
    //   this.selectedMethodId = this.selectedMethod.id;
    //   localStorage.setItem("method", JSON.stringify(this.selectedMethod));
    //   }else{
    //     alert("Please select a delivery method");
    //     }

    console.log(this.selectedMethodId);
  }


















}
