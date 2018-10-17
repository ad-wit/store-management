import { Action } from '@ngrx/store';
import { Product } from '../../product';

export enum ProductActionsTypes {
  InitializeProduct = '[Product] Initialize Product',
  ResetProduct = '[Product] Reset Product',
  LoadProduct = '[Product] Load Product',
  LoadProductSuccess = '[Product] Load Product Success',
  LoadProductFail = '[Product] Load Product Fail',
  UpdateProduct = '[Product] Update Product',
  UpdateProductSuccess = '[Product] Update Product Success',
  UpdateProductFail = '[Product] Update Product Fail',
  AddProduct = '[Product] Add Product',
  AddProductSuccess = '[Product] Add Product Success',
  AddProductFail = '[Product] Add Product Fail',
  DeleteProduct = '[Product] Delete Product',
  DeleteProductSuccess = '[Product] Delete Product Success',
  DeleteProductFail = '[Product] Delete Product Fail'
}

export class InitializeProduct implements Action {
  readonly type = ProductActionsTypes.InitializeProduct;

  constructor() {}
}

export class resetProduct implements Action {
  readonly type = ProductActionsTypes.ResetProduct;

  constructor() {}
}

export class LoadProduct implements Action {
  readonly type = ProductActionsTypes.LoadProduct;

  constructor(public payload: number) {}
}

export class LoadProductSuccess implements Action {
  readonly type = ProductActionsTypes.LoadProductSuccess;

  constructor(public payload: Product) {}
}

export class LoadProductFail implements Action {
  readonly type = ProductActionsTypes.LoadProductFail;

  constructor(public payload: string) {}
}

export class UpdateProduct implements Action {
  readonly type = ProductActionsTypes.UpdateProduct;

  constructor(public payload: Product) {}
}

export class UpdateProductSuccess implements Action {
  readonly type = ProductActionsTypes.UpdateProductSuccess;

  constructor(public payload: Product) {}
}

export class UpdateProductFail implements Action {
  readonly type = ProductActionsTypes.UpdateProductFail;

  constructor(public payload: string) {}
}

export class AddProduct implements Action {
  readonly type = ProductActionsTypes.AddProduct;

  constructor(public payload: Product) {}
}

export class AddProductSuccess implements Action {
  readonly type = ProductActionsTypes.AddProductSuccess;

  constructor(public paylaod: Product) {}
}

export class AddProductFail implements Action {
  readonly type = ProductActionsTypes.AddProductFail;

  constructor(public payload: string) {}
}

export class DeleteProduct implements Action {
  readonly type = ProductActionsTypes.DeleteProduct;

  constructor(public payload: number) {}
}

export class DeleteProductSuccess implements Action {
  readonly type = ProductActionsTypes.DeleteProductSuccess;

  constructor() {}
}

export class DeleteProductFail implements Action {
  readonly type = ProductActionsTypes.DeleteProductFail;

  constructor(public payload: string) {}
}

export type ProductActions = 
  InitializeProduct |
  resetProduct |
  LoadProduct |
  LoadProductSuccess |
  LoadProductFail |
  UpdateProduct |
  UpdateProductSuccess |
  UpdateProductFail |
  AddProduct |
  AddProductSuccess |
  AddProductFail |
  DeleteProduct |
  DeleteProductSuccess |
  DeleteProductFail;