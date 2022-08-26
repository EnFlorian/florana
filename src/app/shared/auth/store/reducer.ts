import { createReducer, on } from '@ngrx/store';
import { AuthStateInterface } from '../types/AuthState.interface';
import { loginAction, loginFailureAction, loginSuccessAction } from './actions';

const initialState: AuthStateInterface = {
  error: '',
  isLoading: false,
  user: null,
};

export const authReducer = createReducer(
  initialState,
  on(loginAction, (state) => ({ ...state, isLoading: true })),
  on(loginSuccessAction, (state, { user }) => ({
    ...state,
    isLoading: false,
    user,
  })),
  on(loginFailureAction, (state, { error }) => ({
    ...state,
    error,
    isLoading: false,
  }))
);
