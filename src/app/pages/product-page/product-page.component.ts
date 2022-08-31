import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  BehaviorSubject,
  combineLatest,
  from,
  map,
  Observable,
  Subject,
  Subscription,
} from 'rxjs';
import {
  fetchProductById,
  fetchProductsByCategory,
} from 'src/app/mock-api/products/api';
import { ProductInterface } from 'src/app/shared/types/Product.interface';
import { CartService } from '../cart-page/services/cart.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
})
export class ProductPageComponent implements OnInit, OnDestroy {
  title: string;
  description: string;
  product$: Observable<ProductInterface>;
  productCategory: string;
  quantity$: Observable<number>;
  subscriptions: Subscription[] = [];
  relatedProducts$: Observable<ProductInterface[]>;

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
    this.quantity$ = this.quantity$.pipe(map((currentQuantity) => quantity));
  }

  initValues(): void {
    this.product$ = from(fetchProductById(+this.route.snapshot.params['id']));
    console.log(this.product$);
    this.relatedProducts$ = from(fetchProductsByCategory(this.productCategory));
    this.quantity$ = from([1]);
    this.subscriptions.push(
      this.quantity$.subscribe((quantity) => console.log(quantity))
    );
    this.title = 'Product Page';
    this.description = 'lorem ipsum dolor sit amet';
  }
}
