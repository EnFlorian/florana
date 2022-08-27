import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  title = 'Cart';
  description = 'lorem ipsum dolor sit amet';

  constructor() {}

  ngOnInit(): void {}
}
