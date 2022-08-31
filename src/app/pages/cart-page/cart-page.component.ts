import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest, from, map, Observable } from 'rxjs';
import { fetchProducts } from 'src/app/mock-api/products/api';
import { cartItemsSelector } from 'src/app/shared/cart/store/selectors';
import { CartItemInterface } from 'src/app/shared/types/CartItem.interface';
import { ProductInterface } from 'src/app/shared/types/Product.interface';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  cartItems$: Observable<CartItemInterface[]>;
  products$: Observable<ProductInterface[]>;

  totalPrice$: Observable<number>;
  totalQuantity$: Observable<number>;
  title = 'Cart';
  description = 'lorem ipsum dolor sit amet';

  constructor(private store: Store, private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems$ = this.store.pipe(select(cartItemsSelector));
    this.products$ = from(fetchProducts());
    this.totalQuantity$ = this.cartItems$.pipe(
      map((items) => items.reduce((acc, item) => acc + item.quantity, 0))
    );
    this.totalPrice$ = combineLatest([this.products$, this.cartItems$]).pipe(
      map(([products, cartItems]) => {
        return cartItems.reduce((acc, cartItem) => {
          const product = products.find((p) => p.id === cartItem.id);
          return acc + product.price * cartItem.quantity;
        }, 0);
      })
    );
  }
}
