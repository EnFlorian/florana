import { Component, OnInit } from '@angular/core';
import { from, map, Observable } from 'rxjs';
import { fetchProducts } from 'src/app/mock-api/products/api';
import { ProductInterface } from 'src/app/shared/types/Product.interface';

@Component({
  selector: 'app-products-section',
  templateUrl: './products-section.component.html',
  styleUrls: ['./products-section.component.scss'],
})
export class ProductsSectionComponent implements OnInit {
  filteredProducts$: Observable<ProductInterface[]>;
  limit = 8;
  products$: Observable<ProductInterface[]>;
  tab: string = 'all';

  ngOnInit(): void {
    this.products$ = from(fetchProducts());
    this.filteredProducts$ = this.filterProducts(
      this.tab,
      from(fetchProducts()).pipe(
        map((products) => products.slice(0, this.limit))
      )
    );
  }

  loadMore() {
    this.limit += this.limit;
    this.filteredProducts$ = this.filterProducts(this.tab, this.products$).pipe(
      map((products) => products.slice(0, this.limit))
    );
  }

  changeTab(tab: string) {
    this.tab = tab;
    this.filteredProducts$ = this.filterProducts(this.tab, this.products$);
  }

  filterProducts(category: string, products: Observable<ProductInterface[]>) {
    return products.pipe(
      map((products) =>
        products.filter((product) => {
          if (category === 'all') {
            return true;
          } else {
            return product.category === category;
          }
        })
      )
    );
  }
}
