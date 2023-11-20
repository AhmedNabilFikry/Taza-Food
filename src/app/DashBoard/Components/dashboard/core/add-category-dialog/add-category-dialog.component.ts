import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Icategory } from 'src/app/DashBoard/models/icategory';
import { CategoryService } from 'src/app/DashBoard/services/category.service';

@Component({
  selector: 'app-add-category-dialog',
  templateUrl: './add-category-dialog.component.html',
  styleUrls: ['./add-category-dialog.component.css']
})
export class AddCategoryDialogComponent implements OnInit {
//   ngOnInit(): void {
//     throw new Error('Method not implemented.');
//   }
//   cateform:FormGroup;
//   categoyies:Icategory[]=[];
//   cate :Icategory={
//     name:'',
//     description:'',
//     id:0}
//   constructor(
//     private _dialog: MatDialog ,
//     private _fb:FormBuilder,
//     private categoryservice:CategoryService ,
//     private dialogref :MatDialogRef<AddCategoryDialogComponent>,
//     @Inject(MAT_DIALOG_DATA) private date :any
//     ){
//     this.cateform = this._fb.group({
//       CategoryName:'',
//       Description:'',
//     })

//   }


//   openaddnewcategory()
//   {
//     this._dialog.open(AddCategoryDialogComponent)
//   }

//   onformsubmit()
//   {
//     if(this.cateform.valid){
//       this.cate.name=this.cateform.get('CategoryName')?.value;
//       this.cate.description=this.cateform.get('Description')?.value;
//       console.log(this.cate)
//      this.categoryservice.add(this.cate).subscribe({
//       next:(data :any) =>{
//         this.dialogref.close();
//       },
//       error:(error)=>{console.log('error'+error)},
//     })
//   }
// }
ngOnInit(): void {
  // this.cateform.patchValue(this.date)
  }
}
