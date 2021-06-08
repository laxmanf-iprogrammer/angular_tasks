import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productListData:any;

  constructor(
    private productService: ProductServiceService
  ) { }

  ngOnInit(): void {
    this.getProductList();
  }

 

  getProductList() {
    this.productService.getAllProduct().subscribe((productdata)=> {
      this.productListData = productdata
      console.log("productlist====",this.productListData )
    }, (err) => {
      console.log(err);
    })
   
  }

}
