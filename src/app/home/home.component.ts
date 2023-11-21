import { Component, OnInit } from '@angular/core';
import { FoodsService } from '../service/foods.service';
import { Food } from '../service/Food';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  quantity: number=0;

  foods: Food[] = [];
  food!: Food;
  

  constructor(private foodsService: FoodsService,
    activatedRoute: ActivatedRoute,
    private router: Router,
    private cartService: CartService) {
    activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.food = foodsService.getFoodById(params['id']);
      }
    });

  }
  ngOnInit(): void {
    this.foods = this.foodsService.getAll();
  }

  addToCart(food: Food) {
    this.cartService.addToCart(food,food.quantity);
    this.router.navigateByUrl('/cart-page');
  }
  increment(food: Food) {
    food.quantity++;
    this.cartService.changeQuantity(food.id, 1,food.quantity);
    
  }

  decrement(food: Food) {
      food.quantity--;
      this.cartService.changeQuantity(food.id, -1,food.quantity);
    
  }

}





