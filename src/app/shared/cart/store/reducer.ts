import { createReducer, on } from '@ngrx/store';
import { CartStateInterface } from '../types/CartState.interface';
import {
  addToCartAction,
  decreaseQuantityAction,
  emptyCartAction,
  increaseQuantityAction,
  removeFromCartAction,
} from './actions';

const initialState: CartStateInterface = {
  cartItems: [
    {
      id: 1,
      quantity: 1,
    },
    {
      id: 2,
      quantity: 2,
    },
  ],
};

export const cartReducer = createReducer(
  initialState,
  on(addToCartAction, (state, { cartItem }) => {
    const existingCartItem = state.cartItems.find(
      (item) => item.id === cartItem.id
    );
    if (existingCartItem) {
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === cartItem.id
            ? { ...item, quantity: item.quantity + cartItem.quantity }
            : item
        ),
      };
    } else {
      return {
        ...state,
        cartItems: [...state.cartItems, cartItem],
      };
    }
  }),

  on(removeFromCartAction, (state, { itemId }) => ({
    ...state,
    cartItems: state.cartItems.filter((item) => item.id !== itemId),
  })),
  on(emptyCartAction, (state) => ({
    ...state,
    cartItems: [],
  })),
  on(increaseQuantityAction, (state, { itemId }) => ({
    ...state,
    cartItems: state.cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    }),
  })),
  on(decreaseQuantityAction, (state, { itemId }) => ({
    ...state,
    cartItems: state.cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    }),
  }))
);
