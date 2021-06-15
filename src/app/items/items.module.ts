import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemOneComponent } from '../components/item-one/item-one.component';
import { ItemTwoComponent } from '../components/item-two/item-two.component';
import { RouterModule } from '@angular/router';
import { ItemRoutingModule } from './item-routing.module';



@NgModule({
  declarations: [
    ItemOneComponent, 
    ItemTwoComponent
  ],

  exports: [
    ItemOneComponent, 
    ItemTwoComponent
  ],
  imports: [
    CommonModule, 
    RouterModule,
    ItemRoutingModule
  ]
})
export class ItemsModule { }
