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
  cartItems: [],
  totalPrice: 0,
  totalQuantity: 0,
};

export const cartReducer = createReducer(
  initialState,
  on(
    addToCartAction,
    (state, { cartItem }): CartStateInterface => ({
      ...state,
      cartItems: [...state.cartItems, cartItem],
      totalPrice: state.totalPrice + cartItem.product.price * cartItem.quantity,
      totalQuantity: state.totalQuantity + cartItem.quantity,
    })
  ),
  on(
    removeFromCartAction,
    (state, { cartItem }): CartStateInterface => ({
      ...state,
      cartItems: state.cartItems.filter(
        (item) => item.product.id !== cartItem.product.id
      ),
      totalPrice: state.totalPrice - cartItem.product.price * cartItem.quantity,
      totalQuantity: state.totalQuantity - cartItem.quantity,
    })
  ),
  on(increaseQuantityAction, (state, { cartItem }): CartStateInterface => {
    const oldItem = state.cartItems.find(
      (item) => item.product.id === cartItem.product.id
    );
    if (oldItem) {
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.product.id === cartItem.product.id) {
            return {
              ...item,
              quantity: cartItem.quantity,
            };
          } else {
            return item;
          }
        }),
        totalPrice:
          state.totalPrice -
          oldItem.product.price * oldItem.quantity +
          cartItem.product.price * cartItem.quantity,
        totalQuantity:
          state.totalQuantity - oldItem.quantity + cartItem.quantity,
      };
    } else {
      return state;
    }
  }),
  on(decreaseQuantityAction, (state, { cartItem }): CartStateInterface => {
    const oldItem = state.cartItems.find(
      (item) => item.product.id === cartItem.product.id
    );
    // remove item if quantity is less than 0
    if (oldItem && cartItem.quantity <= 0) {
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.product.id !== cartItem.product.id
        ),
        totalPrice: state.totalPrice - oldItem.product.price * oldItem.quantity,
        totalQuantity: state.totalQuantity - oldItem.quantity,
      };
    }
    // update quantity if item exists
    if (oldItem) {
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.product.id === cartItem.product.id) {
            return {
              ...item,
              quantity: cartItem.quantity,
            };
          } else {
            return item;
          }
        }),
        totalPrice:
          state.totalPrice -
          oldItem.product.price * oldItem.quantity +
          cartItem.product.price * cartItem.quantity,
        totalQuantity:
          state.totalQuantity - oldItem.quantity + cartItem.quantity,
      };
    } else {
      return state;
    }
  }),
  on(
    emptyCartAction,
    (state): CartStateInterface => ({
      ...state,
      cartItems: [],
      totalPrice: 0,
      totalQuantity: 0,
    })
  )
);
