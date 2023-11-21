import { Injectable } from '@angular/core';
import { Food } from './Food';

@Injectable({
  providedIn: 'root'
})
export class FoodsService {
  getFoodById(id: number): Food {
    return this.getAll().find(food => food.id == id)!;
  }

  constructor() { }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: "Bargar",
        price: 50,
        imageUrl: '/assets/images/bargar.jpg',
        quantity: 0 
      },
      {
        id: 2,
        name: "Manchurian",
        price: 100,
        imageUrl: '/assets/images/manchurian.jpg',
        quantity: 0
      },
      {
        id: 3,
        name: "Paneer",
        price: 170,
        imageUrl: '/assets/images/paneer.jpg',
        quantity: 0
      },
      {
        id: 4,
        name: "Sandwich",
        price: 80,
        imageUrl: '/assets/images/sandwich.jpg',
        quantity: 0
      }
    ];
  }
}
