import { Component, Input, OnInit } from '@angular/core';
import { CartItemInterface } from 'src/app/shared/types/CartItem.interface';
import { Store } from '@ngrx/store';
import { decreaseQuantityAction } from 'src/app/shared/cart/store/actions';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input('item') itemProps: CartItemInterface;

  constructor(private store: Store) {}
  ngOnInit(): void {}

  removeItem() {
    const newCartItem = { ...this.itemProps, quantity: 0 };
    this.store.dispatch(decreaseQuantityAction({ cartItem: newCartItem }));
  }
}
