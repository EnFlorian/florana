import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-section',
  templateUrl: './products-section.component.html',
  styleUrls: ['./products-section.component.scss'],
})
export class ProductsSectionComponent implements OnInit {
  
  
  
  tab: string = 'all';

  constructor() {}

  changeTab(tab: string) {
    this.tab = tab;
  }

  ngOnInit(): void {}
}
