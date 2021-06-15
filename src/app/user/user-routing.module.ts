import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import {Routes,RouterModule } from "@angular/router";
import { UserdataComponent } from "../components/userdata/userdata.component";


const routes: Routes = [
    { path: '', component: UserdataComponent }
]

@NgModule({
    declarations: [], 
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})

export class UserRoutingModule {}