import { Action } from '@ngrx/store';
import { Product } from '../product';

export enum ProductsListActionsTypes {
  LoadProducts = '[Product] Load Products',
  LoadProductsSuccess = '[Product] Load Products Success',
  LoadProductsFail = '[Product] Load Products Fail'
}

export class LoadProducts implements Action {

  readonly type = ProductsListActionsTypes.LoadProducts;

  constructor() {}
}

export class LoadProductsSuccess implements Action {

  readonly type = ProductsListActionsTypes.LoadProductsSuccess;

  constructor(public payload: Product[]) {}
}

export class LoadProductsFail implements Action {

  readonly type = ProductsListActionsTypes.LoadProductsFail;

  constructor(public payload: string) {}
}

export type ProductsListActions = 
  LoadProducts |
  LoadProductsSuccess |
  LoadProductsFail;