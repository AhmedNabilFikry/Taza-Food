import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent {
//   [x: string]: any;
//   cateform:FormGroup;
//   categoyies:Icategory[]=[];
//   cate :Icategory={
//     name:'',
//     description:'',
//     id:0}
//     cateid:number=0;
//   constructor(
//     private _dialog: MatDialog ,
//     private _fb:FormBuilder,
//     private categoryservice:CategoryService ,
//     private matdialogref:MatDialogRef<EidtcategoryComponent>,
//     private activatedRoute: ActivatedRoute,
//     @Inject(MAT_DIALOG_DATA) private date :any
//     ){
//     this.cateform = this._fb.group({
//       CategoryName:'',
//       Description:'',
//     })

//   }


//   openeditcategory(categoryId: number)
//   {
//     const dialogRef = this._dialog.open(EidtcategoryComponent, {
//       data: { categoryId: categoryId },
//     });

//     dialogRef.afterClosed().subscribe((result) => {
//       console.log('Dialog closed with result:', result);
//     });
//   }

//   onformupdate()
//   {

//     const updatedCategoryData = this.cateform.value;
//     this.categoryservice.GetCategoryById

//     this.categoryservice.Update(this.cateid,this.cateform.value).subscribe({
//       next:(data :any) =>{
//         this.matdialogref.close();
//       },
//       error:(error)=>{console.log('error'+error)},
//     })

// }


// onSubmit() {
//   const updatedCategoryData = this.cateform.value;
//   this.categoryservice.Update(this.cateid, updatedCategoryData).subscribe(
//     (data) => {
//       console.log('Category updated successfully:', data);
//       this['dialogRef'].close();
//     },
//     (error) => {
//       console.error('Error updating category:', error);
//     }
//   );
// }


// ngOnInit(): void {
//   this.cateid = this.activatedRoute.snapshot.params['id'];
//   console.log(this.cateid)

//   this.cateform = this._fb.group({
//     // Define your form controls here
//     categoryName: ['', Validators.required],
//     description: ['', Validators.required],

//     // Add other fields as needed
//   });

//  }
}
