import { Component, OnInit } from '@angular/core';
import { CartSercviesService, GrocaryItem } from 'src/app/cart-sercvies.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item:GrocaryItem[]=[]
  current=0;
  constructor(private service:CartSercviesService) {
  }

  ngOnInit(): void {
     this.ChangeCatagory(this.current);
  }

  ChangeCatagory(type:number){
    this.item=this.service.getItems(type);
    this.current=type;
  }

}
