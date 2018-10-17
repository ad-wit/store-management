import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';

import { Product } from '../../product';

import { Store, select } from '@ngrx/store';
import * as fromProducts from '../../state';
import * as productsListActions from '../../state/actions';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductInfoComponent } from '../../components/product-info/product-info.component';

@Component({
  selector: 'app-products-shell',
  templateUrl: './products-shell.component.html',
  styleUrls: ['./products-shell.component.css']
})
export class ProductsShellComponent implements OnInit {

  products$: Observable<Product[]>;
  errorMessage$: Observable<string>;
  selectedProduct: Product = null;
  detailProductId: number = null;
  adminRole: string = null; 

  constructor(private store: Store<fromProducts.State>,
              public dialog: MatDialog) { }

  ngOnInit() {

    this.store.dispatch(new productsListActions.LoadProducts());
    this.products$ = this.store.pipe(select(fromProducts.getProducts));
    this.errorMessage$ = this.store.pipe(select(fromProducts.getError));
  }

  viewProduct(product: Product): void {

    this.selectedProduct = product;
    this.dialog.open(ProductInfoComponent, {
      width: '600px',
      data: this.selectedProduct
    });
  }

  detailProduct(productId: number): void {

    this.detailProductId = productId;
    this.dialog.open(ProductDetailComponent);
  }

}
