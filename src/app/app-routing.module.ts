import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartPageComponent } from './cart-page/cart-page.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:HomeComponent},
  
  {path:"cart-page",component:CartPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
