import { Component, OnInit } from '@angular/core';
import { CartSercviesService } from 'src/app/cart-sercvies.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(public itemService:CartSercviesService ) { }

  ngOnInit() {
  }





}
