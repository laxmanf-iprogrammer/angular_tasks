import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
//import { LoginComponent } from './components/login/login.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { CartCheckoutComponent } from './components/cart-checkout/cart-checkout.component';
import { LoginComponent } from './auth/login/login.component';
import { ProductServiceService } from './services/product-service.service';
import { AuthServiceService } from './auth/auth-service.service';
import { AuthGuardGuard } from './auth/auth-guard.guard';
import { ServerElementComponent } from './components/server-element/server-element.component';
import { CockpitComponent } from './components/cockpit/cockpit.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { HighLightDirecative } from './custom-direcative/highlight.direcatives';
import { DropdownDirecative } from './custom-direcative/dropdown.direcative';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    //LoginComponent,
    CartPageComponent,
  
    CartCheckoutComponent,
       LoginComponent,
       ServerElementComponent,
       CockpitComponent,
       ParentComponent,
       ChildComponent,
       HighLightDirecative,
       DropdownDirecative
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    ProductServiceService,
    AuthServiceService,
    AuthGuardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
