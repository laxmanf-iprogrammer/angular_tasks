import { NgModule } from "@angular/core";
import { CommonModule }  from "@angular/common";
import { Router, RouterModule } from "@angular/router"
//import { CollectionComponent } from "../components/collection/collection.component";
//import { CockpitComponent } from "../components/cockpit/cockpit.component";
import { ShopingListRoutingModule } from "./shopinglistrouting.module";



@NgModule({
    declarations: [
      
    ],

    imports: [
        CommonModule,
        RouterModule,
       ShopingListRoutingModule
    ]

   
})

export class ShopingListModule { }

