import { createReducer, on } from '@ngrx/store';
import { ProductStateInterface } from '../types/ProductState.interface';
import {
  fetchProductsAction,
  fetchProductsFailureAction,
  fetchProductsSuccessAction,
} from './actions';

const initialState: ProductStateInterface = {
  error: '',
  isLoading: false,
  products: [],
};

export const productReducer = createReducer(
  initialState,
  on(
    fetchProductsAction,
    (state): ProductStateInterface => ({ ...state, isLoading: true })
  ),
  on(
    fetchProductsSuccessAction,
    (state, { products }): ProductStateInterface => ({
      ...state,
      isLoading: false,
      products,
    })
  ),
  on(
    fetchProductsFailureAction,
    (state, { error }): ProductStateInterface => ({
      ...state,
      error,
      isLoading: false,
    })
  )
);
