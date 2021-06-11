import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {of} from 'rxjs'
import { Observable } from 'rxjs';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cartInFodata:any = {}
  cartItems: any = [];
  constructor(
    private productservicce: ProductServiceService,
    private route: ActivatedRoute,
    private productservice: ProductServiceService
  ) { }

  ngOnInit(): void {
    //this.cartInFodata.localStorage.getItem('product');
    this.cartItems = this.productservice.getCartItems()
   //  this.cartInFodata = data;
     console.log("cart info data",this.cartItems)
   
    
    }
   
  


}
