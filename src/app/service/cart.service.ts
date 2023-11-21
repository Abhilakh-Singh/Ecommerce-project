import { Injectable } from "@angular/core";
import { Cart } from "./Cart";
import { CartItem } from "./CartItem";
import { Food } from "./Food";

@Injectable({
  providedIn: 'root'
})
export class CartService {
constructor(){}

  private cart: Cart = new Cart();

   changeQuantity(foodId: number, quantity: number,updateQuantity:number): void {
     let cartItem = this.cart.items.find(item => item.food && item.food.id === foodId);
     if (cartItem) {
       cartItem.quantity += quantity;
       
     }
 }

  addToCart(food: Food,quantity:number): void {
    let cartItem = this.cart.items.find(item => item.food && item.food.id === food.id);

    if (cartItem) {
      this.changeQuantity(food.id, 0, quantity);
      return;
    }
    this.cart.items.push(new CartItem(food));
  }

  getCart(): Cart {
    return this.cart;
  }
removeItem(foodId:number):void{
this.cart.items=this.cart.items.filter(item=>item.food.id !==foodId)
}
  

  
}
