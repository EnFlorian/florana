import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, from, Observable, Subscription } from 'rxjs';
import { fetchProductById } from 'src/app/mock-api/products/api';
import { ProductInterface } from 'src/app/shared/types/Product.interface';
import { CartService } from '../cart-page/services/cart.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit, OnDestroy {
  title: string = 'Product Page';
  description: string = 'lorem ipsum dolor sit amet';
  product$: Observable<ProductInterface>;
  quantity$: Observable<number>;
  subscriptions: Subscription[] = [];

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initValues();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  addToCart(): void {
    this.subscriptions.push(
      combineLatest([this.quantity$, this.product$]).subscribe(
        ([quantity, product]) => {
          this.cartService.addToCart({ id: product.id, quantity });
        }
      )
    );
  }

  setQuantity(event: Event) {
    const quantity: number = Number((event.target as HTMLInputElement).value);
    this.quantity$ = from([quantity]);
  }

  initValues(): void {
    this.product$ = from(fetchProductById(+this.route.snapshot.params['id']));
    this.quantity$ = from([1]);
  }
}
