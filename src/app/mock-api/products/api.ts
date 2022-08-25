// Products API
import { ProductInterface } from 'src/app/shared/types/product.interface';
import { products } from './data';

export const fetchProducts = (): Promise<ProductInterface[]> => {
  return new Promise((resolve, reject) => resolve(products));
};
