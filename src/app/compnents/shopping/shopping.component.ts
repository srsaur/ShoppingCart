import { Component, OnInit } from '@angular/core';
import { CartSercviesService } from 'src/app/cart-sercvies.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  shipping= this.builder.group({
    name:['',Validators.required],
    address1:['',Validators.required],
    address2:[''],
    city:[''],
  })

  isSubbmitted:false;

  constructor(public itemService:CartSercviesService,private builder:FormBuilder) { }


  ngOnInit() {
  }

}
