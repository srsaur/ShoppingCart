import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './compnents/item/item.component';
import { ShoppingCartComponent } from './compnents/shopping-cart/shopping-cart.component';
import { ShoppingComponent } from './compnents/shopping/shopping.component';

const routes: Routes = [

  { path: "", component: ItemComponent },
  { path: "product", component: ItemComponent },

  { path: "cart", component: ShoppingCartComponent },
  { path: "shopping", component: ShoppingComponent },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
