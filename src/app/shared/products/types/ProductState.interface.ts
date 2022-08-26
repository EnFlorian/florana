import { ProductInterface } from '../../types/product.interface';

export interface ProductStateInterface {
  error: string;
  isLoading: boolean;
  products: ProductInterface[];
}
