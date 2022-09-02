import { Injectable } from '@angular/core';
import { LoginRequestInterface } from './types/LoginRequest.interface';
import { Store } from '@ngrx/store';
import { loginAction, logoutAction } from './store/actions';

@Injectable()
export class AuthService {
  constructor(private store: Store) {}

  login(request: LoginRequestInterface) {
    this.store.dispatch(loginAction(request.email, request.password));
  }

  logout() {
    this.store.dispatch(logoutAction());
  }
}
