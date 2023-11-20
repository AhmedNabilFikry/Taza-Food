import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiProductService } from 'src/app/services/api-product.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  topRatedProducts: any[] = [];
  pageIndex: number = 1;
  pageSize: number = 8;
  totalItems: number = 0;

  constructor(private apiservice:ApiProductService ,private router: Router) {}

  ngOnInit(): void {
    this.getTopRatedProducts();
  }

  goToProductspage(): void {
    this.router.navigate(['/product']);
  }
  DisplayProductDetails(id: number) {
    this.router.navigate(['/product-details', id]);
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

}
