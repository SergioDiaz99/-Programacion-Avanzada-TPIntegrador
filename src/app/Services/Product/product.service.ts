import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from 'src/app/Models/Product/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private apiUrl = 'https://utn-avanzada2-tp-final.herokuapp.com/';

  constructor(private http: HttpClient) { }

  getAll(): Promise<any>{
    return this.http.get(this.apiUrl+"api/Product").toPromise();
  }

  getById(productId: number): Promise<any>{
    return this.http.get(this.apiUrl+"/api/Product/"+productId).toPromise();
  }

  add(product: Product): Promise<any>{
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
    };

    return this.http.post(this.apiUrl+"api/Product",product, httpOptions)
      .toPromise();
  }



}
