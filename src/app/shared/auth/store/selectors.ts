import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthStateInterface } from '../types/AuthState.interface';

export const authFeatureSelector =
  createFeatureSelector<AuthStateInterface>('auth');

export const isLoadingSelector = createSelector(
  authFeatureSelector,
  (state: AuthStateInterface) => state.isLoading
);

export const errorSelector = createSelector(
  authFeatureSelector,
  (state: AuthStateInterface) => state.error
);

export const userSelector = createSelector(
  authFeatureSelector,
  (state: AuthStateInterface) => state.user
);
