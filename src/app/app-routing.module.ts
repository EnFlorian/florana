import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthPageModule } from './pages/auth-page/auth-page.module';
import { CartPageModule } from './pages/cart-page/cart-page.module';
import { HomePageModule } from './pages/home-page/home-page.module';
import { NotFoundModule } from './pages/not-found/not-found.module';
import { ProductPageModule } from './pages/product-page/product-page.module';

@NgModule({
  imports: [RouterModule.forRoot([], { scrollPositionRestoration: 'enabled' })],
  exports: [
    RouterModule,
    CartPageModule,
    ProductPageModule,
    HomePageModule,
    AuthPageModule,
    NotFoundModule,
  ],
})
export class AppRoutingModule {}
