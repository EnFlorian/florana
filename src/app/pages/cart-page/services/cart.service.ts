import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest, from, map, Observable } from 'rxjs';
import { fetchProducts } from 'src/app/mock-api/products/api';
import {
  addToCartAction,
  decreaseQuantityAction,
  emptyCartAction,
  increaseQuantityAction,
  removeFromCartAction,
} from 'src/app/shared/cart/store/actions';
import { cartItemsSelector } from 'src/app/shared/cart/store/selectors';
import { CartItemInterface } from 'src/app/shared/types/CartItem.interface';
import { ProductInterface } from 'src/app/shared/types/Product.interface';

@Injectable()
export class CartService {
  products$: Observable<ProductInterface[]>;
  cartItems$: Observable<CartItemInterface[]>;
  totalPrice$: Observable<number>;
  totalQuantity$: Observable<number>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initValues();
  }

  addToCart(cartItem: CartItemInterface) {
    this.store.dispatch(addToCartAction({ cartItem: cartItem }));
  }

  removeFromCart(itemId: number) {
    this.store.dispatch(removeFromCartAction({ itemId }));
  }

  increaseQuantity(itemId: number) {
    this.store.dispatch(increaseQuantityAction({ itemId }));
  }

  decreaseQuantity(itemId: number) {
    this.store.dispatch(decreaseQuantityAction({ itemId }));
  }

  clearCart() {
    this.store.dispatch(emptyCartAction());
  }

  getTotalPrice() {}

  getTotalQuantity() {
    return 0;
  }

  initValues() {
    this.products$ = from(fetchProducts());
    this.cartItems$ = this.store.pipe(select(cartItemsSelector));
    this.totalQuantity$ = this.cartItems$.pipe(
      map((cartItems) => {
        return cartItems.reduce((acc, item) => acc + item.quantity, 0);
      })
    );

    this.totalPrice$ = combineLatest([this.products$, this.cartItems$]).pipe(
      map(([products, cartItems]) => {
        return cartItems.reduce(
          (acc, item) =>
            acc +
            products.find((product) => product.id === item.id).price *
              item.quantity,
          0
        );
      })
    );
  }

  // getQuantity(itemId: number): Observable<number> {
  //   return this.cartItems$.pipe(
  //     map((cartItems) => {
  //       return cartItems.reduce((acc, item) => {
  //         if (item.id === itemId) {
  //           return item.quantity;
  //         }
  //         return acc;
  //       }, 0);
  //     })
  //   );
  // }
}
