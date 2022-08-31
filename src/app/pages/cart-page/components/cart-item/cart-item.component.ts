import { Component, Input, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { fetchProductById } from 'src/app/mock-api/products/api';
import { CartItemInterface } from 'src/app/shared/types/CartItem.interface';
import { ProductInterface } from 'src/app/shared/types/Product.interface';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input('item') itemProps: CartItemInterface;
  product$: Observable<ProductInterface>;

  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.product$ = from(fetchProductById(this.itemProps.id));
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.itemProps.id);
  }

  increaseQuantity() {
    this.cartService.increaseQuantity(this.itemProps.id);
  }

  decreaseQuantity() {
    this.cartService.decreaseQuantity(this.itemProps.id);
  }
}
