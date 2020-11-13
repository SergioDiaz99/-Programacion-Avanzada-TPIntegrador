import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from 'src/app/Models/Product/product';
import { ProductService } from 'src/app/Services/Product/product.service';

@Component({
  selector: 'app-product-category-add',
  templateUrl: './product-category-add.component.html',
  styleUrls: ['./product-category-add.component.css']
})
export class ProductCategoryAddComponent implements OnInit {

  productForm = new FormGroup({
    productCategoryId: new FormControl(''),
    productName: new FormControl(''),
    productDescription: new FormControl(''),
    productPrice: new FormControl('')
  });

  constructor(public productService: ProductService) { }

  message : string = '';

  ngOnInit(): void {
  }

  add(){
    let product = this.getData();
    
    this.productService.add(product)
    .then(response => {
      this.message = "Product successfully added";
    })
    .catch(error => {
      this.message = "An error has ocurred!";
    })
    console.log(this.message);
  }

  getData(): Product{
    let product = new Product();
    product.productCategoryId = this.productForm.get('productCategoryId').value;
    product.name = this.productForm.get('productName').value;
    product.description = this.productForm.get('productDescription').value;
    product.price = this.productForm.get('productPrice').value;

    return product;
  }
}
