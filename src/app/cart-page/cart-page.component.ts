import { Component, OnInit } from '@angular/core';
import { CartItem } from '../service/CartItem';
import { Cart } from '../service/Cart';
import { CartService } from '../service/cart.service';
import { Food } from '../service/Food';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements  OnInit {
  cart!: Cart;
  quantity: number=0;
  food!: Food;
  
constructor(private cartService:CartService, private router: Router){}
ngOnInit(): void {
  this.setCart();
}
setCart() {
  this.cart = this.cartService.getCart();
}
  increment(cartItem: CartItem) {
    cartItem.quantity++;
  }

 decrement(cartItem: CartItem) {
     cartItem.quantity--;
  }
onclick(){
  alert("Order Successfully")
}
removeItem(cartItem:CartItem){
  this.cartService.removeItem(cartItem.food.id)
  this.setCart();
}
back(){
  this.router.navigate(['/home']);
}
}
