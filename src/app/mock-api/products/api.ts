// Products API
import { ProductInterface } from 'src/app/shared/types/Product.interface';
import { products } from './data';

export const fetchProducts = (): Promise<ProductInterface[]> => {
  return new Promise((resolve, reject) => resolve(products));
};

export const fetchProductById = (id: number): Promise<ProductInterface> => {
  console.log('Id is: ', id);
  console.log(
    'Object is:',
    products.find((product) => product.id === id)
  );
  return new Promise((resolve, reject) =>
    resolve(products.find((product) => product.id === id))
  );
};

export const fetchProductsByCategory = (
  category: string
): Promise<ProductInterface[]> => {
  return new Promise((resolve, reject) =>
    resolve(products.filter((product) => product.category === category))
  );
};
