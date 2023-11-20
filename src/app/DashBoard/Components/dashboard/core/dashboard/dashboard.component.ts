import { Component } from '@angular/core';
import { Icategory } from 'src/app/DashBoard/models/icategory';
import { Iorder } from 'src/app/DashBoard/models/iorder';
import { Iproduct } from 'src/app/DashBoard/models/iproduct';
import { Iuser } from 'src/app/DashBoard/models/iuser';
import { CategoryService } from 'src/app/DashBoard/services/category.service';
import { OrderService } from 'src/app/DashBoard/services/order.service';
import { UserService } from 'src/app/DashBoard/services/user.service';
import { ApiProductService } from 'src/app/services/api-product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  orders:Iorder[]=[]
  categories:Icategory[]=[]
  products:Iproduct[]=[]
  users:Iuser[]=[]
  constructor(private orderservice:OrderService ,
    private categoryservice:CategoryService,
    private productservice:ApiProductService,
    private userservice:UserService){}
   ngOnInit(): void {

        // ---------------- [ Get All categories ]
        this.categoryservice.getCategories().subscribe({
          next:(data) =>{this.categories= data,console.log(this.categories)},
          error:(error)=>{console.log('error'+error)},
          complete: ()=>{},
        })


    // ---------------- [ Get All Product ]
    this.productservice.getAllProducts().subscribe({
      next:(data) =>{this.products= data,console.log(this.products)},
      error:(error)=>{console.log('error'+error)},
      complete: ()=>{},
    })
// ---------------- [ Get All Users ]
    this.userservice.getusers().subscribe({
      next:(data) =>{this.users= data,console.log(this.users)},
      error:(error)=>{console.log('error'+error)},
      complete: ()=>{},
    })

    // ---------------- [ Get All orders ]
     this.orderservice.getorders().subscribe({
       next:(data) =>{this.orders= data,console.log(this.orders)},
       error:(error)=>{console.log('error'+error)},
       complete: ()=>{},
     })
   }
}
