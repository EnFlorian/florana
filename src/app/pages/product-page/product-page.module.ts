import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'product/:id', component: ProductPageComponent },
];
@NgModule({
  declarations: [
    ProductPageComponent,
    PageHeaderComponent,
    ImageGalleryComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProductPageModule {}
