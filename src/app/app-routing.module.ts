import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartPageModule } from './pages/cart-page/cart-page.module';
import { HomePageModule } from './pages/home-page/home-page.module';
import { NotFoundModule } from './pages/not-found/not-found.module';
import { ProductPageModule } from './pages/product-page/product-page.module';

@NgModule({
  imports: [RouterModule.forRoot([])],
  exports: [
    RouterModule,
    CartPageModule,
    ProductPageModule,
    HomePageModule,
    NotFoundModule,
  ],
})
export class AppRoutingModule {}
