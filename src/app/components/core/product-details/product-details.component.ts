import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Icartitem } from 'src/app/models/icart';
import { Iproduct } from 'src/app/models/iproduct';
import { ApiProductService } from 'src/app/services/api-product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  ProductId: number = 0;
  Product: any;
  CartItems: Icartitem[] = [];
  productQuantity: number = 1;
  ShowButton: Boolean = false;
  constructor(private apiservice: ApiProductService, private activatedroute: ActivatedRoute) { }
  ngOnInit(): void {
    this.ProductId = this.activatedroute.snapshot.params['id'];
    this.GetProductDetails(this.ProductId);
  }
  GetProductDetails(id: number) {
    this.apiservice.getProductById(id).subscribe((data) => {
      this.Product = data;
      console.log(this.Product);
    })
  }
  // JSON.stringify() for savine the data , JSON.parse For retrive data
  // AddToCart(){
  //   if ("cart" in localStorage) {
  //     this.CartItems = JSON.parse(localStorage.getItem("cart")!);
  //     this.Product.quantity = this.productQuantity;
  //     let isExist = this.CartItems.find((item) => item.id == this.Product.id) ;
  //     if(isExist){
  //       alert('This product already exist');
  //     }else{
  //       this.CartItems.push(this.Product);
  //       localStorage.setItem("cart",JSON.stringify(this.CartItems))
  //     }
  //   }else{
  //     this.Product.quantity = this.productQuantity;
  //     this.CartItems.push(this.Product);
  //     localStorage.setItem("cart",JSON.stringify(this.CartItems))
  //   }
  // }


  AddToCart(): void {
    this.Product.quantity = this.productQuantity;

    this.apiservice.addToCart(this.Product).subscribe({
      next: (data: any) => {
        console.log(`Added to Cart Successfully ${data.cartItems[0].name}`);
        window.alert(`Added to Cart Successfully`);
        const addedItem = data.cartItems[0];
        this.apiservice.updateCartItemCount(addedItem.quantity);
      },
      error: (error: any) => {
        console.error('Error adding item to cart:', error);
      },
      complete: () => { },
    });
  }
}




