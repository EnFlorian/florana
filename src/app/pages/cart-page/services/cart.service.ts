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

  initValues() {
    this.cartItems$ = this.store.pipe(select(cartItemsSelector));
  }
}
