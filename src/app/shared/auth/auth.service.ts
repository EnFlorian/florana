import { Injectable } from '@angular/core';
import { UserInterface } from '../types/User.interface';
import { login } from 'src/app/mock-api/auth/api';
import { Observable, from } from 'rxjs';
import { LoginRequestInterface } from './types/LoginRequest.interface';

@Injectable()
export class AuthService {
  login(request: LoginRequestInterface): Observable<UserInterface> {
    const user = login(request.email, request.password);
    return from(user);
  }
}
