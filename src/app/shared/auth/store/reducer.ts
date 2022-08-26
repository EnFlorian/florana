import { createReducer, on } from '@ngrx/store';
import { AuthStateInterface } from '../types/AuthState.interface';
import { loginAction, loginFailureAction, loginSuccessAction } from './actions';

const initialState: AuthStateInterface = {
  error: '',
  loading: false,
  user: null,
};

export const authReducer = createReducer(
  initialState,
  on(loginAction, (state) => ({ ...state, loading: true })),
  on(loginSuccessAction, (state, { user }) => ({
    ...state,
    loading: false,
    user,
  })),
  on(loginFailureAction, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
