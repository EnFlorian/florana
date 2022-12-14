import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartPageComponent } from './cart-page.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { RouterModule, Routes } from '@angular/router';
import { PageHeaderModule } from 'src/app/shared/components/page-header/page-header.module';
import { CartService } from './services/cart.service';
import { ModalModule } from 'src/app/shared/components/modal/modal.module';

const routes: Routes = [{ path: 'cart', component: CartPageComponent }];
@NgModule({
  declarations: [CartPageComponent, CartItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PageHeaderModule,
    ModalModule,
  ],
  providers: [CartService],
})
export class CartPageModule {}
