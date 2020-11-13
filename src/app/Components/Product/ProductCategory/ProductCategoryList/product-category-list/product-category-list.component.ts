import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product/product';
import { ProductService } from 'src/app/Services/Product/product.service';

@Component({
  selector: 'app-product-category-list',
  templateUrl: './product-category-list.component.html',
  styleUrls: ['./product-category-list.component.css']
})
export class ProductCategoryListComponent implements OnInit {

  productList: Array<Product> = new Array<Product>();

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll()
    .then(response => {
      this.productList = response;
    })
    .catch(error => {});

  }


}
