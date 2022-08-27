// Products API
import { ProductInterface } from 'src/app/shared/types/Product.interface';
import { products } from './data';

export const fetchProducts = (): Promise<ProductInterface[]> => {
  return new Promise((resolve, reject) => resolve(products));
};

export const fetchProductById = (id: number): ProductInterface => {
  return products.find((product) => product.id === id);
};
