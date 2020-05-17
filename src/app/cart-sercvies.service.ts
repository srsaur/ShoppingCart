import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartSercviesService {

  constructor() { }

  getItems(type:number):GrocaryItem[]
  {
     if(type==0){
       return GrosryList;
     }
     else{
        return GrosryList.filter(e=>e.type==type);
     }
  }

  TotalItemInCart():number{
     return GrosryList.reduce((p,c)=>p+c.count,0)
  }

  ProductList():GrocaryItem[]{
      return GrosryList.filter(e=>e.count>0)
  }

  totalMoney():number{
    return this.ProductList().reduce((e,c)=>e+c.count*c.price,0);
}

clearCart(){
  this.ProductList().forEach(e=>{
      e.count=0;
  });
}

}

export const GrosryList: GrocaryItem[] = [
  {
    id: 1,
    type: 1,
    name: "fruit 1",
    price: 0.5,
    count: 0,
    image: "./assets/Images/fruits/1.jpg"
  },
  {
    id: 2,
    type: 1,
    name: "fruit 2",
    price: 1.5,
    count: 0,
    image: "./assets/Images/fruits/2.jpg"
  },
  {
    id: 3,
    type: 1,
    name: "fruit 3",
    price: 2.5,
    count: 0,
    image: "./assets/Images/fruits/3.jpg"
  },
  {
    id: 4,
    type: 1,
    name: "fruit 4",
    price: 3.5,
    count: 0,
    image: "./assets/Images/fruits/4.jpg"
  },
  {
    id: 5,
    type: 2,
    name: "Bread 1",
    price: 0.5,
    count: 0,
    image: "./assets/Images/Bread/1.jpg"
  },
  {
    id: 6,
    type: 2,
    name: "Bread 2",
    price: 1.5,
    count: 0,
    image: "./assets/Images/Bread/2.jpg"
  },
  {
    id: 7,
    type: 2,
    name: "Bread 3",
    price: 2.5,
    count: 0,
    image: "./assets/Images/Bread/3.jpg"
  },
  {
    id: 8,
    type: 2,
    name: "Bread 4",
    price: 3.5,
    count: 0,
    image: "./assets/Images/Bread/4.jpg"
  },
  {
    id: 9,
    type: 3,
    name: "Dairy 1",
    price: 0.5,
    count: 0,
    image: "./assets/Images/Dairy/1.jpg"
  },
  {
    id: 10,
    type: 3,
    name: "Dairy 2",
    price: 1.5,
    count: 0,
    image: "./assets/Images/Dairy/2.jpg"
  },
  {
    id: 11,
    type: 3,
    name: "Dairy 3",
    price: 2.5,
    count: 0,
    image: "./assets/Images/Dairy/3.jpg"
  },
  {
    id: 12,
    type: 3,
    name: "Dairy 4",
    price: 3.5,
    count: 0,
    image: "./assets/Images/Dairy/4.jpg"
  },
  {
    id: 13,
    type: 4,
    name: "spices 1",
    price: 0.5,
    count: 0,
    image: "./assets/Images/spices/1.jpg"
  },
  {
    id: 14,
    type: 4,
    name: "spices 2",
    price: 1.5,
    count: 0,
    image: "./assets/Images/spices/2.jpg"
  },
  {
    id: 15,
    type: 4,
    name: "spices 3",
    price: 2.5,
    count: 0,
    image: "./assets/Images/spices/3.jpg"
  },
  {
    id: 16,
    type: 5,
    name: "spices 4",
    price: 3.5,
    count: 0,
    image: "./assets/Images/spices/4.jpg"
  },
  {
    id: 17,
    type: 5,
    name: "vegetables 1",
    price: 0.5,
    count: 0,
    image: "./assets/Images/vegetables/1.jpg"
  },
  {
    id: 18,
    type: 5,
    name: "vegetables 2",
    price: 1.5,
    count: 0,
    image: "./assets/Images/vegetables/2.jpg"
  },
  {
    id: 19,
    type: 5,
    name: "vegetables 3",
    price: 2.5,
    count: 0,
    image: "./assets/Images/vegetables/3.jpg"
  },
  {
    id: 4,
    type: 4,
    name: "vegetables 4",
    price: 3.5,
    count: 0,
    image: "./assets/Images/vegetables/4.jpg"
  }

]

export interface GrocaryItem {
  id: number,
  type: number,
  name: string,
  price: number,
  image: string,
  count: number
}
