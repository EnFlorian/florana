import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, map, Observable, Subscription } from 'rxjs';
import {
  fetchProductById,
  fetchProductsByCategory,
} from 'src/app/mock-api/products/api';
import { ProductInterface } from 'src/app/shared/types/Product.interface';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit, OnDestroy {
  title: string = 'Product Page';
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ';
  quantity: number = 1;
  product$: Observable<ProductInterface>;
  productSub: Subscription;
  productCategory: string;
  relatedProducts$: Observable<ProductInterface[]>;

  ngOnInit(): void {
    this.product$ = from(fetchProductById(1));
    // get product category from product
    this.productSub = this.product$.subscribe((product) => {
      this.productCategory = product.category;
    });
    // get related products from product category
    this.relatedProducts$ = from(fetchProductsByCategory(this.productCategory));
  }

  ngOnDestroy(): void {
    this.productSub.unsubscribe();
  }

  setQuantity(quantity: number): void {
    this.quantity = quantity;
  }
}
