import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Iproduct } from 'src/app/models/iproduct';
import { ApiProductService } from 'src/app/services/api-product.service';
import { ModalComponent } from '../modal/modal.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Icart, Icartitem } from 'src/app/models/icart';
import { Icategory } from 'src/app/models/icategory';
import { WishlistService } from 'src/app/services/wishlist.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Iproduct[] = [];
  filteredProducts: Iproduct[] = [];     //Filtering ....
  categories: Icategory[] = [];          //Category
  SearchResult: Iproduct[] = [];        //Search Suggestion
  categoryFilter = '';
  priceFilter: number | undefined;
  rateFilter: number = 0;
  pageSize = 8;
  currentPage = 1;
  // New properties for sorting ....
  sortField: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';
  //cart
  CartItems: Icartitem[] = [];
  productQuantity: number = 1;
  ShowButton: Boolean = false;
  constructor(private apiservice: ApiProductService, private modalService: NgbModal, private  wishlistService: WishlistService,
    private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['category']) {
        this.categoryFilter = params['category'];
        this.LoadProducts();
      } else {
        this.LoadProducts();
      }
    });
    this.GetCategories();
    this.getbypagintion();
  }
  // calling GetProducts fuc...
  // LoadProducts() {
  //   this.apiservice.FilterProducts(this.currentPage, this.pageSize).subscribe((response: any) => {
  //     const data = response.data; // Extract the data property from the response
  //     if (Array.isArray(data)) {
  //       // Append the new data to the existing array
  //       this.products = [...this.products, ...data];
  //       // Check if there are more pages
  //       if (data.length === this.pageSize && this.products.length < response.count) {
  //         // If there are more pages and not all data has been fetched, increment the page index and make the next request
  //         this.currentPage++;
  //         this.LoadProducts();
  //         this.applyFilters();
  //       }
  //     } else {
  //       console.error('Invalid data structure in API response.');
  //     }
  //   });
  // }

  // calling LoadProducts fun...
  LoadProducts() {
    this.apiservice.FilterProducts(1, 8).subscribe((data: any) => {
      this.products = data.data;
      this.applyFilters();
    })
  }
  //Calling GetCategories fun...
  GetCategories() {
    this.apiservice.getAllCategories().subscribe((data: any) => {
      this.categories = data;
    })
  }

  //Filtering Products
  applyFilters() {
    this.filteredProducts = this.products.filter((product) => {
      const categoryMatch = !this.categoryFilter || product.category === this.categoryFilter;
      const priceMatch = !this.priceFilter || product.price === this.priceFilter;
      const rateMatch = !this.rateFilter || product.rate === this.rateFilter;

      return categoryMatch && priceMatch && rateMatch;
    });
    this.sortProducts();
  }
  //Sorting Products
  sortProducts() {
    if (this.sortField && this.sortDirection) {
      this.filteredProducts = this.filteredProducts.sort((a: any, b: any) => {
        const aValue = a[this.sortField];
        const bValue = b[this.sortField];

        if (typeof aValue === 'string' && typeof bValue === 'string') {
          // Sort string values
          return this.sortDirection === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
        } else if (typeof aValue === 'number' && typeof bValue === 'number') {
          // Sort numeric values
          return this.sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
        } else {

          return 0;
        }
      });
    }
  }
  onSortChange(event: Event) {
    const selectedField = (event.target as HTMLSelectElement).value;
    if (this.sortField === selectedField) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = selectedField;
      this.sortDirection = 'asc';
    }
    // Reapply filters and sorting
    this.applyFilters();
  }
  // modal Pop-Up...
  ShowProductDetails(product: Iproduct): void {
    const modalRef = this.modalService.open(ModalComponent, { size: 'lg' });
    modalRef.componentInstance.product = product; // Pass the product data to the modal component
  }

  //Search For Product...   *Displaying it in search component
  SubmitSearch(val: string) {
    this.router.navigate([`search/${val}`])
  }
  onProductSuggestionClick(event: any, productName: string) {
    // event.preventDefault();
    console.log('Clicked on product suggestion:', productName);
    this.DisplayProductDetailsBySearch(productName);
  }
  DisplayProductDetailsBySearch(val: string) {
    console.log('Clicked on product suggestion:', val);
    this.apiservice.Searching(val).subscribe({
      next: (response: any) => {
        console.log('API Response:', response);
        if (response && response.data) {
          const products = response.data;
          // get product who matches the val...
          const selectedProduct = products.find((product: { name: string; }) => product.name.toLowerCase() === val.toLowerCase());
          if (selectedProduct) {
            this.router.navigate(['/product-details', selectedProduct.id]);
          } else {
            console.log('Product not found in SearchResult');
          }
        } else {
          console.log('Invalid API response structure');
        }
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      },
      complete: () => { }
    });
  }
  // Search Suggestion...
  SuggestProducts(query: KeyboardEvent) {
    let element = query.target as HTMLInputElement;
    this.apiservice.Searching(element.value).subscribe((data: any) => {
      this.SearchResult = data.data
    })
  }
  HideSearch() {
    this.SearchResult = [];
  }
  //// showing Product details
  DisplayProductDetails(id: number) {
    this.router.navigate(['/product-details', id]);
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
  addToWishlists(product: Iproduct): void {
    this.wishlistService.addToWishlist(product);
    window.alert(`Added to Wishlist: ${product.name}`);
  }
  addToWishlist(product: Iproduct): void {
    this.wishlistService.addToWishlist(product);
  }
  //////pagination
  allproduct:number=1;
pagenumber: number=1;
  getbypagintion(){

    this.apiservice.pagantion(this.pagenumber,this.pageSize).subscribe((data:any) => {
  this.products=data.data;
  this.allproduct = data.count;
   this.applyFilters();
    });
  }
  renderpage(event:number) {
  this.pagenumber=event
  this.getbypagintion();
    }



//////////////////////////////////////////////wishlist Actions
addToWishlist1(product: Iproduct): void {
  if (this.wishlistService.isProductInWishlist(product)) {
    alert('Product already exists in the wishlist!');
  } else {
    this.wishlistService.addToWishlist(product);
  }
}

    removeFromWishlist(product: Iproduct): void {
      this.wishlistService.removeFromWishlist(product);
    }
}
