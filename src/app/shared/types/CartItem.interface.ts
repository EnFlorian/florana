import { ProductInterface } from './Product.interface';

export interface CartItemInterface {
  id: number;
  quantity: number;
  product: ProductInterface;
}
