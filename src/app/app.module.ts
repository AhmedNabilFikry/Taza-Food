import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/core/product/product.component';
import { NabBarComponent } from './components/shared/nab-bar/nab-bar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/core/home/home.component';
import { SearchComponent } from './components/core/search/search.component';
import { ModalComponent } from './components/core/modal/modal.component';
import { CartComponent } from './components/core/cart/cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiltrationComponent } from './components/core/filtration/filtration.component';
import { ProductDetailsComponent } from './components/core/product-details/product-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { WordcountPipe } from './models/wordcount.pipe';
import { Wordcount1Pipe } from './models/wordcount1.pipe';
import { AssetPipe } from './custom pipe/asset.pipe';
import { RegisterComponent } from './components/Account/register/register.component';
import { LoginComponent } from './components/Account/login/login.component';
import { WishlistComponent } from './components/core/wishlist/wishlist.component';
import { ReviewComponent } from './components/core/review/review.component';
import { ContentwordsPipePipe } from './custom pipe/contentwords-pipe.pipe';
import { BlogComponent } from './components/core/blog/blog.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { NotFoundComponent } from './DashBoard/Components/Core/not-found/not-found.component';
import { AddCategoryDialogComponent } from './DashBoard/Components/dashboard/core/add-category-dialog/add-category-dialog.component';
import { AddNewProductComponent } from './DashBoard/Components/dashboard/core/add-new-product/add-new-product.component';
import { AddAdminComponent } from './DashBoard/Components/dashboard/core/add-admin/add-admin.component';
import { AllProductsComponent } from './DashBoard/Components/dashboard/core/all-products/all-products.component';
import { DashCategoryComponent } from './DashBoard/Components/dashboard/core/dash-category/dash-category.component';
import { DashboardComponent } from './DashBoard/Components/dashboard/core/dashboard/dashboard.component';
import { EditCategoryComponent } from './DashBoard/Components/dashboard/core/edit-category/edit-category.component';
import { OrdersComponent } from './DashBoard/Components/dashboard/core/orders/orders.component';
import { UsersComponent } from './DashBoard/Components/dashboard/core/users/users.component';
import { NavComponent } from './DashBoard/Components/dashboard/Shared/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NabBarComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    ModalComponent,
    CartComponent,
    FiltrationComponent,
    ProductDetailsComponent,
    WordcountPipe,
    Wordcount1Pipe,
    AssetPipe,
    RegisterComponent,
    LoginComponent,
    WishlistComponent,
    ReviewComponent,
    ContentwordsPipePipe,
    BlogComponent,
    NavBarComponent,
  NotFoundComponent,
  AddCategoryDialogComponent,
  AddNewProductComponent,
  AddAdminComponent,
  AllProductsComponent,
  DashCategoryComponent,
  DashboardComponent,
  EditCategoryComponent,
  OrdersComponent,
  UsersComponent,
  NavComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbRatingModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
