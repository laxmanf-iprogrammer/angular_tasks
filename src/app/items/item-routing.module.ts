import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router"
import { ItemOneComponent } from "../components/item-one/item-one.component";

const routes: Routes = [

    { path: '', redirectTo: 'item', pathMatch: 'full' },
    { path: 'item', component: ItemOneComponent }
]




@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [RouterModule]
})


export class ItemRoutingModule { }