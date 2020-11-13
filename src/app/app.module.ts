import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './Router/app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductCategoryListComponent } from './Components/Product/ProductCategory/ProductCategoryList/product-category-list/product-category-list.component';
import { ProductCategoryAddComponent } from './Components/Product/ProductCategory/ProductCategoryAdd/product-category-add/product-category-add.component';
import { ProductCategoryViewEditComponent } from './Components/Product/ProductCategory/ProductCategoryViewEdit/product-category-view-edit/product-category-view-edit.component';
import { HeaderComponent } from './Components/Share/header/header.component';
import { FooterComponent } from './Components/Share/footer/footer.component';
import { LoginComponent } from './Components/login/login.component';
import { LogoutComponent } from './Components/logout/logout.component';
import { AuthInterceptorService } from './Auth/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductCategoryListComponent,
    ProductCategoryAddComponent,
    ProductCategoryViewEditComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
