import { Component } from '@angular/core';
import { CategoryService } from 'src/app/DashBoard/services/category.service';
import { Icategory } from 'src/app/models/icategory';
import { AddCategoryDialogComponent } from '../add-category-dialog/add-category-dialog.component';

@Component({
  selector: 'app-dash-category',
  templateUrl: './dash-category.component.html',
  styleUrls: ['./dash-category.component.css']
})
export class DashCategoryComponent {
  // categoyies:Icategory[]=[]
  // constructor(
  //   private categoryservice:CategoryService ,
  //    private _dialog: MatDialogModule, ){}

  //  ngOnInit(): void {
  //   // ---------------- [ Get All categories ]
  //    this.categoryservice.getCategories().subscribe({
  //      next:(data) =>{this.categoyies= data,console.log(this.categoyies)},
  //      error:(error)=>{console.log('error'+error)},
  //      complete: ()=>{},
  //    })
  //   }


  //   // ---------------- [ Delete Category ]
  //   delete(id:number){
  //     console.log(id)
  //     this.categoyies = this.categoyies.filter(p => p.id !== id);
  //         this.categoryservice.DeleteCategory(id).subscribe({
  //           next:() =>{},
  //           error:(error)=>{console.log('error'+error)},
  //           complete: ()=>{console.log("really delete")},
  //         });
  //       }


  //   openaddnewcategory(){
  //     this._dialog.open(AddCategoryDialogComponent)}



  // //  openeditcategory(cate:any) {
  // //   this._dialog.open(EidtcategoryComponent );
  // //   }


  //   openeditcategory(categoryId: number)
  //   {
  //     const dialogRef = this._dialog.open(DashCategoryComponent, {
  //       data: { categoryId: categoryId },
  //     });

  //     dialogRef.afterClosed().subscribe((result) => {
  //       // Handle the dialog close event if needed
  //       console.log('Dialog closed with result:', result);
  //     });
  //   }
}
