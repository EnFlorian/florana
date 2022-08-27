import { ProductInterface } from '../../types/Product.interface';

export interface ProductStateInterface {
  error: string;
  isLoading: boolean;
  products: ProductInterface[];
}
