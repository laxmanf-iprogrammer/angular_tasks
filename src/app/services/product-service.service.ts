/* import { HttpClientModule } from '@angular/common/http'; */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private productList = [];

  public addProducts:any = [];
  constructor(
    private http: HttpClient
  ) { }
 

  public getAllProduct(): Observable<any> {
    return this.http.get("./assets/product.json");
  }
  getCartItems():any {
    let productList;
    productList = JSON.stringify(localStorage.getItem('cart_products'));
    return JSON.parse(productList);
  }

  public addTocartItems(product:any) {
    console.log(product)
    if(localStorage.getItem('cart_products')) {
      let data = localStorage.getItem('cart_products')? JSON.stringify(localStorage.getItem('cart_products')): "[]";
      localStorage.setItem("cart_products", JSON.stringify([JSON.parse(JSON.parse(data)), product]));
      console.log(localStorage.getItem('cart_products'))
      }else {
        localStorage.setItem("cart_products", JSON.stringify([product]))
      }
  }

}
