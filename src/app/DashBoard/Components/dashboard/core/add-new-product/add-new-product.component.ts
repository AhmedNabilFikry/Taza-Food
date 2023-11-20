import { Component } from '@angular/core';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent {
//   prodform:FormGroup;
//   products:Iproduct[]=[];
//   categories:Icategory[]=[];
//   images!: File;
//   prod:Iproduct={
//     id:0,
//     name:'',
//     description:'',
//     price:0,
//     imageUrl:'',
//     rate:0,
//     category:''}
//   constructor(
//     private matdialog: MatDialog ,
//     private fb:FormBuilder,
//     private apiProductService:ApiProductService ,
//     private categoryservice:CategoryService,
//     private matdialogref :MatDialogRef<AddNewProductComponent>,
//     @Inject(MAT_DIALOG_DATA) private date :any
//     ){
//     this.prodform = this.fb.group({
//       ProductName:'',
//       Productrate:'',
//       imageUrl:'',
//       Description:'',
//       Productprice:'',
//       category:'',
//     })

//   }


// /////////////////////////////////////
// onformsubmit(){
//   if(this.prodform.valid){
//     this.prod.name=this.prodform.get('ProductName')?.value;
//     this.prod.rate=this.prodform.get('Productrate')?.value;
//     this.prod.price=this.prodform.get('Productprice')?.value;
//     this.prod.imageUrl=this.images.name;
//     this.prod.category=this.prodform.get('category')?.value;
//     this.prod.description=this.prodform.get('Description')?.value;

//   this.apiProductService.add(this.prod).subscribe({
//     next:(data :any) =>{
//       this.matdialogref.close();
//       console.log(this.prod);
//     },
//     error:(error)=>{console.log('error'+JSON.parse(error) )},
//   })
// }
// }
// AssignImage(e: any) {
//   this.images = e.target.files[0];
// }

//   ngOnInit(): void {
//     this.prodform.patchValue(this.date)


// // ---------------- [ Get All categories ]
// this.categoryservice.getCategories().subscribe({
//   next:(data) =>{this.categories= data,console.log(this.categories)},
//   error:(error)=>{console.log('error'+error)},
//   complete: ()=>{},
// })
//   }
}
