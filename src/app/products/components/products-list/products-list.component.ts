import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {

  constructor() { }

  @Input() products: Product[];
  @Output() view = new EventEmitter<Product>();
  @Output() detail = new EventEmitter<number>();
  @Input() adminRole: string;

  displayedColumns: string[] = ['position', 'name', 'code', 'type', 'price', 'inStock', 'button'];

  viewProduct(product: Product): void {

    this.view.emit(product);
  }

  detailProduct(productId: number): void {

    this.detail.emit(productId);
  }

}
