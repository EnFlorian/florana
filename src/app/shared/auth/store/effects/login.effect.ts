import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../auth.service';
import { catchError, from, map, of, switchMap, tap } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from '../actions';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { Router } from '@angular/router';
import { UserInterface } from '../../../types/User.interface';
import { LoginErrorInterface } from '../../types/LoginError.interface';
import { dbLogin } from 'src/app/mock-api/auth/api';

@Injectable()
export class LoginEffect {
  constructor(private actions$: Actions, private router: Router) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap((request) => {
        return from(dbLogin(request.email, request.password)).pipe(
          map((user: UserInterface) => {
            return loginSuccessAction({ user });
          }),
          tap(() => this.router.navigate(['/'])),
          catchError((error: LoginErrorInterface) =>
            of(loginFailureAction({ error: error.message })).pipe(
              tap(() => {
                this.router.navigate(['/auth']);
              })
            )
          )
        );
      })
    )
  );
}
