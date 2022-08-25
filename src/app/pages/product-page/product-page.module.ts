import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';



@NgModule({
  declarations: [
    ProductPageComponent,
    PageHeaderComponent,
    ImageGalleryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductPageModule { }
