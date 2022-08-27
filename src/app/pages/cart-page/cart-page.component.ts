import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { cartItemsSelector } from 'src/app/shared/cart/store/selectors';
import { CartItemInterface } from 'src/app/shared/types/CartItem.interface';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  items$: Observable<CartItemInterface[]>;
  title = 'Cart';
  description = 'lorem ipsum dolor sit amet';

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.items$ = this.store.pipe(select(cartItemsSelector));
  }
}
