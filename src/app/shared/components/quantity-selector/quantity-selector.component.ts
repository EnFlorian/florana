import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-selector',
  templateUrl: './quantity-selector.component.html',
  styleUrls: ['./quantity-selector.component.scss'],
})
export class QuantitySelectorComponent {
  @Input() setQuantity: (quantity: number) => void;
  quantity: number = 1;

  onQuantityChange(): void {
    this.setQuantity(this.quantity);
  }
}
