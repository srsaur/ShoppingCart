import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartSercviesService } from './cart-sercvies.service';
import { ItemComponent } from './compnents/item/item.component';
import { ShoppingCartComponent } from './compnents/shopping-cart/shopping-cart.component';
import { ShoppingComponent } from './compnents/shopping/shopping.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ShoppingCartComponent,
    ShoppingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
