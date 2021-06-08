import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cartInFodata:any;
  cartItems: any;
  constructor(
    private productservicce: ProductServiceService, 
    private route: ActivatedRoute,
  
  ) { }

  ngOnInit(): void {
    //this.cartInFodata.localStorage.getItem('product');
    let data = JSON.stringify(localStorage.getItem('cart_products'));
    this.cartItems =  JSON.parse(JSON.parse(data));
  }
  

}
