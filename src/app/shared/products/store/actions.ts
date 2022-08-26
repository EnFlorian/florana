import { createAction } from '@ngrx/store';
import { ActionTypes } from './actionTypes';

export const fetchProductsAction = createAction(ActionTypes.FETCH_PRODUCTS);
