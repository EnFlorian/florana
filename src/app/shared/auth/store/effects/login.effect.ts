import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../auth.service';
import { catchError, map, of, switchMap, tap } from 'rxjs';
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

@Injectable()
export class LoginEffect {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,
    private router: Router
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap((request) => {
        return this.authService.login(request).pipe(
          map((user: UserInterface) => {
            this.persistanceService.set('user', user);
            return loginSuccessAction({ user });
          }),
          catchError((errorResponse: LoginErrorInterface) => {
            return of(loginFailureAction({ error: errorResponse.message }));
          })
        );
      })
    )
  );

  redirectAfterLogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => this.router.navigate(['/']))
      ),
    { dispatch: false }
  );
}
