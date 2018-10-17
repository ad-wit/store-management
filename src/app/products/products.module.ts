import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppMaterialModule } from '../app-material.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { Effects } from './state/effects';
import { reducer } from './state/reducer';

import { ProductsShellComponent } from './container/products-shell/products-shell.component';
import { ProductDetailComponent } from './container/product-detail/product-detail.component';

import { ProductsService } from './products.service';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';

const productsRoutes: Routes = [
  {
    path: '',
    component: ProductsShellComponent
  },
  {
    path: 'detail',
    component: UpdateProductComponent,
    outlet: 'productDetail',
    children: [
      {
        path: '',
        loadChildren: 'products/update-products/update-products.module#UpdateProductsModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule.forChild(productsRoutes),
    StoreModule.forFeature('products', reducer),
    EffectsModule.forFeature([
      Effects
    ])
  ],
  declarations: [ProductsShellComponent, ProductDetailComponent, ProductsListComponent, ProductInfoComponent, UpdateProductComponent],
  providers: [ProductsService],
  entryComponents: [ ProductDetailComponent, ProductInfoComponent ]
})
export class ProductsModule { }