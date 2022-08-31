import { Injectable } from '@angular/core';
import { UserInterface } from '../types/User.interface';
import { dbLogin } from 'src/app/mock-api/auth/api';
import { Observable, from } from 'rxjs';
import { LoginRequestInterface } from './types/LoginRequest.interface';
import { Store } from '@ngrx/store';
import { loginAction } from './store/actions';

@Injectable()
export class AuthService {
  constructor(private store: Store) {}

  login(request: LoginRequestInterface) {
    this.store.dispatch(loginAction(request.email, request.password));
  }
}
