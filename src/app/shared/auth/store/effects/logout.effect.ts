import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { logoutAction } from '../actions';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Injectable()
export class LogoutEffect {
  constructor(private actions$: Actions, private router: Router) {}

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logoutAction),
        tap(() => {
          return this.router.navigate(['/']);
        })
      ),
    { dispatch: false }
  );
}
