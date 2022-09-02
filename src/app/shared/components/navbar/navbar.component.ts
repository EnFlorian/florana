import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { userSelector } from '../../auth/store/selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  constructor(private store: Store, private authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.select(userSelector).pipe(
      map((user) => {
        return !!user;
      })
    );
  }

  logout() {
    this.authService.logout();
  }
}
