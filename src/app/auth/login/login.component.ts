import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import { first } from 'rxjs/operators';
import { AuthGuardGuard } from '../auth-guard.guard';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  userName: any;
  passWord: any;
  loading = false;
  loginModel: any;
  submitted = false;
  returnUrl: any;
  error: any;
  authenticationService: any;
  constructor(
    private fb: FormBuilder,
    private authservice: AuthServiceService,
    private router: Router,
    private route: ActivatedRoute,
    private authguard: AuthGuardGuard
  
  ) { 

  this.loginModel = {
    userName: 'admin@gmail.com',
    passWord: 'admin@123'
  }
    this.LoginForm = this.fb.group({
      userName: ['', Validators.required],
      passWord: ['', Validators.required]

    })

  }

  ngOnInit(): void {
    
  }


  get f() { return this.LoginForm.controls; }
  onSubmit(LoginForm:any) {
    console.log(LoginForm.value)
   /*  this.submitted = true;
    if (this.LoginForm.invalid) {
      return;
  }  
  this.loading = true; */

    if(this.loginModel.userName == LoginForm.value.userName  && this.loginModel.passWord == LoginForm.value.passWord) {
      localStorage.setItem('currentUser', `${this.loginModel.userName}-${this.loginModel.passWord}`);
      this.router.navigate(['/product-list']);
    }
    else{
       alert('please enter valid details');
    } 
    this.authservice.login(this.f.userName.value, this.f.passWord.value)
    .subscribe((res) => {
      console.log(res);
    }, (err) => {
      console.log(err);
    })

    }

  }


