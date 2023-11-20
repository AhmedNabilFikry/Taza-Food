import { SearchComponent } from './components/core/search/search.component';
import { CartComponent } from './components/core/cart/cart.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/core/product/product.component';
import { HomeComponent } from './components/core/home/home.component';
import { FiltrationComponent } from './components/core/filtration/filtration.component';
import { ProductDetailsComponent } from './components/core/product-details/product-details.component';
import { WishlistComponent } from './components/core/wishlist/wishlist.component';
import { RegisterComponent } from './components/Account/register/register.component';
import { LoginComponent } from './components/Account/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '' },
  { path: 'product', component: ProductComponent },
  { path: 'cart', component: CartComponent },
  { path: 'search/:query', component: SearchComponent },
  { path: 'Filtration', component: FiltrationComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  // {path:"nav",
  // component:NavComponent},
  // {path:"allproducts",
  // component:AllproductsComponent},
  // {path:"orders",
  // component:OrdersComponent},
  // {path:"users",
  // component:UserComponent},
  // {path:"category",
  // component:CategeryComponent},
  // {path:"dashboard",
  // component:DashboardComponent},
  // {path:"addnewcategory",
  // component:AddCategoryDialogComponent},
  // {path:'editcategory/:id',
  // component:EidtcategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
