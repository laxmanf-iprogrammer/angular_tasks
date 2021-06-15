import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserdataComponent } from '../components/userdata/userdata.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UserdataComponent
  
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class UserModule { }
