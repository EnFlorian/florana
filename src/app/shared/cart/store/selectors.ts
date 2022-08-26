import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartStateInterface } from '../types/CartState.interface';

export const cartFeatureSelector =
  createFeatureSelector<CartStateInterface>('cart');

export const cartItemsSelector = createSelector(
  cartFeatureSelector,
  (state: CartStateInterface) => state.cartItems
);

export const totalPriceSelector = createSelector(
  cartFeatureSelector,
  (state: CartStateInterface) => state.totalPrice
);

export const totalQuantitySelector = createSelector(
  cartFeatureSelector,
  (state: CartStateInterface) => state.totalQuantity
);
