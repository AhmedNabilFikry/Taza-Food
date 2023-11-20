import { Component } from '@angular/core';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent {
//   adminform:FormGroup;
//   err:string="";
//   admin:Admin[]=[];
//   adminuser :Admin={
//     FristName:'',
//   LastName:'',
//   PhoneNumber:0,
//   Email:'',
//   Password:'',}
//   constructor(
//     private _dialog: MatDialog ,
//     private _fb:FormBuilder,
//     private UserService:UserService ,
//     private dialogref :MatDialogRef<AddadminComponent>,
//     @Inject(MAT_DIALOG_DATA) private date :any
//     ){
//     this.adminform = this._fb.group({
//       CategoryName:'',
//       Description:'',
//     })

//   }
//   onformsubmit()
//   {
//     if(this.adminform.valid){
//       this.adminuser.FristName=this.adminform.get('fristName')?.value;
//       this.adminuser.LastName=this.adminform.get('lasName')?.value;
//     this.UserService.addadmin(this.adminuser).subscribe({
//       next:(data :any) =>{
//         this.dialogref.close();
//       },
//       error:(error)=>{console.log('error'+error)},
//     })
//   }
// }

// Adminform=new FormGroup({
//   email:new FormControl(null,[Validators.required,Validators.email]),
//   password:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(15)])

// })

// ogog(loginForm:FormGroup){

//   this.UserService.addadmin(loginForm.value).subscribe((response)=>{
//   if(response.messege=='Succeeded'){

//     localStorage.setItem('usertoken',response.user.token)

//     this._Login.savecurrentuser();
//   console.log(response)
//   this.router.navigate(['/home'])

//   }
//   else{
//   this.err=response.user.email;

//   }

//   })

//       }



}
