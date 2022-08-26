import { createAction, props } from '@ngrx/store';
import { ProductInterface } from '../../types/product.interface';
import { ActionTypes } from './actionTypes';

export const fetchProductsAction = createAction(ActionTypes.FETCH_PRODUCTS);
export const fetchProductsSuccessAction = createAction(
  ActionTypes.FETCH_PRODUCTS_SUCCESS,
  props<{ products: ProductInterface[] }>()
);
export const fetchProductsFailureAction = createAction(
  ActionTypes.FETCH_PRODUCTS_FAILURE,
  props<{ error: string }>()
);
