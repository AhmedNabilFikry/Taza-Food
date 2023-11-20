import { Component } from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {
//   products:Iproduct[]=[]
//   constructor(private productservice:ApiProductService,
//    private _dialog: MatDialog,
//     ){}
//   ngOnInit(): void {

//    // ---------------- [ Get All Product ]
//     this.productservice.getAllProducts().subscribe({
//       next:(data) =>{this.products= data,console.log(this.products)},
//       error:(error)=>{console.log('error'+error)},
//       complete: ()=>{},
//     })
//   }

//   delete(id:number){
//    console.log(id)
//    this.products = this.products.filter(p => p.id !== id);
//        // ---------------- [ Delete Product ]
//        this.productservice.delete(id).subscribe({
//          next:() =>{},
//          error:(error)=>{console.log('error'+error)},
//          complete: ()=>{console.log("really delete")},
//        });
//   }


//  ///////////== open add product dialog   ==////////////////
// openaddnewproduct()
// {
//  this._dialog.open(AddNewProductComponent)
// }
}
