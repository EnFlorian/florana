import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import {
  addToCartAction,
  decreaseQuantityAction,
  emptyCartAction,
  increaseQuantityAction,
  removeFromCartAction,
} from 'src/app/shared/cart/store/actions';
import { cartItemsSelector } from 'src/app/shared/cart/store/selectors';
import { CartItemInterface } from 'src/app/shared/types/CartItem.interface';

@Injectable()
export class CartService {
  cartItems$: Observable<CartItemInterface[]>;

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

  getTotalQuantity(): Observable<number> {
    return this.cartItems$.pipe(
      map((items) => items.reduce((acc, item) => acc + item.quantity, 0))
    );
  }

  initValues() {
    this.cartItems$ = this.store.pipe(select(cartItemsSelector));
  }
}
