import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page.component';
import { RouterModule, Routes } from '@angular/router';
import { PageHeaderModule } from 'src/app/shared/components/page-header/page-header.module';
import { ProductCardModule } from 'src/app/shared/components/product-card/product-card.module';

const routes: Routes = [
  { path: 'product/:id', component: ProductPageComponent },
];

@NgModule({
  declarations: [ProductPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PageHeaderModule,
    ProductCardModule,
  ],
})
export class ProductPageModule {}
