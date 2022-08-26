import { CartItemInterface } from '../../types/CartItem.interface';

export interface CartStateInterface {
  cartItems: CartItemInterface[];
  totalPrice: number;
  totalQuantity: number;
}
