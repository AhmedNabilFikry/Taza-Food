import { Component, OnInit } from '@angular/core';
import { Ipagination } from 'src/app/models/ipagination';
import { Iproduct } from 'src/app/models/iproduct';
import { ApiProductService } from 'src/app/services/api-product.service';

@Component({
  selector: 'app-filtration',
  templateUrl: './filtration.component.html',
  styleUrls: ['./filtration.component.css']
})
export class FiltrationComponent implements OnInit {
  filterProducts: Iproduct[] = [];
  filteredProducts: Iproduct[] = [];
  categoryFilter = '';
  priceFilter: number|undefined;
  rateFilter: number = 0;
pageSize = 10;
currentPage = 1;
  // New properties for sorting
  sortField: string = ''; // Initialize with an empty string
  sortDirection: 'asc' | 'desc' = 'asc';
constructor(private apiservice:ApiProductService){}
ngOnInit(): void {
  this.LoadProducts();
}
LoadProducts() {
  this.apiservice.FilterProducts(this.currentPage, this.pageSize).subscribe((response: any) => {
    const data = response.data; // Extract the data property from the response
    if (Array.isArray(data)) {
      // Append the new data to the existing array
      this.filterProducts = [...this.filterProducts, ...data];
      // Check if there are more pages
      if (data.length === this.pageSize && this.filterProducts.length < response.count) {
        // If there are more pages and not all data has been fetched, increment the page index and make the next request
        this.currentPage++;
        this.LoadProducts();
        this.applyFilters();
      }
    } else {
      console.error('Invalid data structure in API response.');
    }
  });
}
applyFilters() {
  this.filteredProducts = this.filterProducts.filter((product) => {
    const categoryMatch = !this.categoryFilter || product.category === this.categoryFilter;
    const priceMatch = !this.priceFilter || product.price === this.priceFilter;
    const rateMatch = !this.rateFilter || product.rate === this.rateFilter;

    return categoryMatch && priceMatch && rateMatch;
  });
  this.sortProducts();
}
sortProducts() {
  if (this.sortField && this.sortDirection) {
    this.filteredProducts = this.filteredProducts.sort((a:any, b:any) => {
      const aValue = a[this.sortField];
      const bValue = b[this.sortField];

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        // Sort string values using localeCompare
        return this.sortDirection === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
      } else if (typeof aValue === 'number' && typeof bValue === 'number') {
        // Sort numeric values by direct subtraction
        return this.sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
      } else {
        // Handle other types or mixed types by keeping the original order
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
}
