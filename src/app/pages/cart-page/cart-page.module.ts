import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from './cart-page.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'cart', component: CartPageComponent }];
@NgModule({
  declarations: [CartPageComponent, CartItemComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CartPageModule {}
