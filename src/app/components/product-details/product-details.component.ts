import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit { 
  productDetails: any;
  addProduct:any;
  addItemCount:any;
  constructor(
    private productservice: ProductServiceService, 
    private route: ActivatedRoute,

    ) { }

  ngOnInit(): void {
    this.getAddProduct();
    this.productservice.getAllProduct().subscribe(res => {
      this.productDetails = res.filter((item:any ) => item.id == this.route.snapshot.paramMap.get('id'))
      console.log("productdetails #######",this.productDetails)
    }, (err) => {
      console.log(err)
    })
  }

  addToCart(product:any) {
   localStorage.setItem("cart_products", JSON.stringify(this.productservice.addTocartItems(product)));
}

getAddProduct() {
  
  //console.log("add item",this.addItemCount.localStorage.getItem('this.addProduct'))
}

}