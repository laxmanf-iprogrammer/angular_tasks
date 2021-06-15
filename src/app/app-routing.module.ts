import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthGuardGuard } from './auth/auth-guard.guard';
import { AuthServiceService } from './auth/auth-service.service';
import { LoginComponent } from './auth/login/login.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { ChildComponent } from './components/child/child.component';
//import { CockpitComponent } from './components/cockpit/cockpit.component';
//import { CollectionComponent } from './components/collection/collection.component';
import { CourselistComponent } from './components/courselist/courselist.component';
import { CustomObservableComponent } from './components/custom-observable/custom-observable.component';
import { MarketComponent } from './components/market/market.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ServerElementComponent } from './components/server-element/server-element.component';

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  { path: 'product-list', component: ProductListComponent, canActivate: [AuthGuardGuard] },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'cart-info', component: CartPageComponent },
 
  { path: 'server-element', component: ServerElementComponent },
  { path: 'child', component: ChildComponent },

  { path: 'courses', component: CourselistComponent },
  { path: 'market', component: MarketComponent },
  { path: 'user', component: CustomObservableComponent },

  //{ path: '', redirectTo: 'shopinglist', pathMatch: 'full' },
  { path: 'shopinglist', loadChildren: () => import('./shoping-module/shopinglist.module').then(m => m.ShopingListModule) },
 
  { path: 'item', loadChildren: () => import('./items/items.module').then(m => m.ItemsModule) }


];

@NgModule({
  //declarations: [ ProductListComponent ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
