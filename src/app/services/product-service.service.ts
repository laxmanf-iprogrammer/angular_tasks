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
  public addTocartItems(data:any) {
    this.addProducts.push(data);
    return this.addProducts;
  }

}
