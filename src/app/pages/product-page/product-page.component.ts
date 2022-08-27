import { Component, OnInit } from '@angular/core';
import { fetchProductById } from 'src/app/mock-api/products/api';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent {
  quantity: number = 1;
  product = fetchProductById(1);
  setQuantity(quantity: number): void {
    this.quantity = quantity;
  }
}
