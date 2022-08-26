import { createAction, props } from '@ngrx/store';
import { UserInterface } from '../../types/User.interface';
import { ActionTypes } from './actionTypes';

export const loginAction = createAction(
  ActionTypes.LOGIN,
  (email: string, password: string) => ({ email, password })
);

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ user: UserInterface }>()
);

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{ error: string }>()
);

export const logoutAction = createAction(ActionTypes.LOGOUT);
