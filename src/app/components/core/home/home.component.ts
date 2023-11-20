import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Icategory } from 'src/app/models/icategory';
import { Iproduct } from 'src/app/models/iproduct';
import { Ireview } from 'src/app/models/ireview';
import { ApiProductService } from 'src/app/services/api-product.service';
declare const bootstrap: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:Iproduct[] = [];
  topRatedProducts: any[] = [];
  pageIndex: number = 1;
  pageSize: number = 4;
  totalItems: number = 0;
  length: number = 0;
  categories: Icategory[] = [];
  productQuantity :number = 1;
  constructor(private apiservice:ApiProductService ,private router: Router) {}
  ngOnInit(): void {
    this.LoadProducts();
    this.getTopRatedProducts();
    this.getCatWithImg();
  }

  goToProducts(category: string): void {
    this.router.navigate(['/product'], { queryParams: { category: category } });
  }
  LoadProducts(){
    this.apiservice.getAllProducts().subscribe((data:any) =>{
      this.products = data;
    })
  }
  getTopRatedProducts() {
    this.apiservice.getTopRatedProducts(this.pageIndex, this.pageSize).subscribe({
      next: (response) => {
        this.topRatedProducts = response.data;
        this.totalItems = response.count;
      },
      error: (error) => {
        console.error('Error fetching top-rated products:', error);
      },
    });
  }
  onPageChange(event: any) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.getTopRatedProducts();
  }

  getCatWithImg(){
    this.apiservice.getAllCategories().subscribe(category =>{
          this.categories = category;
        });
  }
  AddToCart(product: Iproduct): void {
    product.quantity = this.productQuantity;

    this.apiservice.addToCart(product).subscribe({
      next: (data: any) => {
        console.log('API Response:', data); // Log the entire response

        if (data.cartItems && data.cartItems.length > 0) {
          const addedItem = data.cartItems[0];
          console.log('Added Item:', addedItem);
          window.alert('Added to Cart Successfully');

      // Update the cart count
      const totalItems = data.cartItems.reduce((sum: number, item: any) => sum + item.quantity, 0);
      this.apiservice.updateCartItemCount(totalItems);
        } else {
          console.error('No cart items found in the response');
        }
      },
      error: (error) => {
        console.error('Error adding item to cart:', error);
      },
      complete: () => { },
    });
  }
}
