import { Component, Input } from '@angular/core';
import { ProductInterface } from '../../types/Product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input('product') productProps: ProductInterface;
}
