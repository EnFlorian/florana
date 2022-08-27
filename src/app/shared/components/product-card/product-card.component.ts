import { Component, Input, OnInit } from '@angular/core';
import { ProductInterface } from '../../types/Product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input('product') productProps: ProductInterface;

  ngOnInit(): void {}
}
