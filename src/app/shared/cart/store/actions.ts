import { createAction, props } from '@ngrx/store';
import { CartItemInterface } from '../../types/CartItem.interface';
import { ActionTypes } from './actionTypes';

export const emptyCartAction = createAction(ActionTypes.EMPTY_CART);

export const addToCartAction = createAction(
  ActionTypes.ADD_TO_CART,
  props<{ cartItem: CartItemInterface }>()
);

export const removeFromCartAction = createAction(
  ActionTypes.REMOVE_FROM_CART,
  props<{ itemId: number }>()
);

export const increaseQuantityAction = createAction(
  ActionTypes.INCREASE_QUANTITY,
  props<{ itemId: number }>()
);

export const decreaseQuantityAction = createAction(
  ActionTypes.DECREASE_QUANTITY,
  props<{ itemId: number }>()
);
