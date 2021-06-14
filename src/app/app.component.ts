import { Component } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Course } from './course.model';
import { CourserService } from './services/course.service';

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
  selectedCourse: any;
  //selectedCourse: Course;
  constructor(
    private fb: FormBuilder,
    private courseService: CourserService
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

    //  this.courseService.courseSelected
    //   .subscribe(
    //     (course: Course) => {
    //       this.selectedCourse = course;
    //     }
    //   );
  }

  
  items = ['item1', 'item2', 'item3', 'item4'];

  addNewItem(newItem: string) {
    this.items.push(newItem)
  }


}
