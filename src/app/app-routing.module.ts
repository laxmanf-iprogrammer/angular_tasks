import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot  } from '@angular/router';
import { AuthGuardGuard } from './auth/auth-guard.guard';
import { AuthServiceService } from './auth/auth-service.service';
import { LoginComponent } from './auth/login/login.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { ChildComponent } from './components/child/child.component';
import { CockpitComponent } from './components/cockpit/cockpit.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ServerElementComponent } from './components/server-element/server-element.component';

const routes: Routes = [
  
  { path: '',   redirectTo: '/login', pathMatch: 'full' }, 
  { path: 'product-list', component: ProductListComponent, canActivate: [AuthGuardGuard] },
  { path: 'product-details/:id', component: ProductDetailsComponent}, 
  { path: 'cart-info', component: CartPageComponent }, 
  { path: 'login', component: LoginComponent }, 

  { path: 'server-element', component: ServerElementComponent },
  { path: 'cockpit', component: CockpitComponent },

  {path: 'child', component: ChildComponent }

];

@NgModule({
  //declarations: [ ProductListComponent ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
