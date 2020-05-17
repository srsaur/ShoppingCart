import { Component, OnInit } from '@angular/core';
import { CartSercviesService, GrocaryItem } from './cart-sercvies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   *
   */
  constructor(public itemServiec:CartSercviesService) {



  }
}
