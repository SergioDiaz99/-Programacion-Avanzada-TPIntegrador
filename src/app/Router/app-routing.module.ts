import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../Components/login/login.component';
import { ProductCategoryAddComponent } from '../Components/Product/ProductCategory/ProductCategoryAdd/product-category-add/product-category-add.component';
import { ProductCategoryListComponent } from '../Components/Product/ProductCategory/ProductCategoryList/product-category-list/product-category-list.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "logout", component: LoginComponent/*, canActivate: [AuthGuard]*/ },
  { path: "products", component: ProductCategoryListComponent /*canActivate: [AuthGuard]*/ },
  { path: 'add', component: ProductCategoryAddComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: "**", redirectTo: "", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }