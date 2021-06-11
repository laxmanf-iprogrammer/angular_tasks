import { Component } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  parenttochild = " pass data from parent to child ###############"
  title = 'ecommerence-cart-app';
  loginForm: FormGroup;
  submitted = false;
  cartInFodata: any;
  cartItems: any;
  cartCount: any;
  constructor(
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  // onSubmit() {
  //   this.submitted = true;

  //   console.log(this.loginForm.value);
  //   this.loginForm.reset();
  // } 

  ngOnInit() {
    //this.cartInFodata.localStorage.getItem('product');
    /*  let data = JSON.stringify(localStorage.getItem('cart_products'));
     this.cartItems =  JSON.parse(JSON.parse(data));
     this.cartCount = this.cartItems.length */

  }
  items = ['item1', 'item2', 'item3', 'item4'];

  addNewItem(newItem: string) {
    this.items.push(newItem)
  }


}
