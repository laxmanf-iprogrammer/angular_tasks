import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"
import { BrowserModule } from '@angular/platform-browser'
//import { CockpitComponent } from "../components/cockpit/cockpit.component";
//import { CollectionComponent } from "../components/collection/collection.component";

const routes: Routes = [

]

@NgModule({

    declarations: [
       // CollectionComponent, 
       // CockpitComponent
    ],

    imports: [
        RouterModule.forChild(routes)
    ], 
})


export class ShopingListRoutingModule { }