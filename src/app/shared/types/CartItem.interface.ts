import { ProductInterface } from './product.interface';

export interface CartItemInterface {
  id: number;
  quantity: number;
  product: ProductInterface;
}
