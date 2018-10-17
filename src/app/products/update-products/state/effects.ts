import { Injectable } from "@angular/core";

import { map, mergeMap, catchError } from "rxjs/operators";
import { of, Observable } from "rxjs";

import { ProductsService } from "../../products.service";

import { Product } from "../../product";

import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";

import * as productActions from "../state/actions";

@Injectable()
export class Effects {

  constructor(private actions$: Actions,
              private productsService: ProductsService) {}
  
  @Effect()
  loadProduct$: Observable<Action> = this.actions$.pipe(
    ofType(productActions.ProductActionsTypes.LoadProduct),
    mergeMap((action: productActions.LoadProduct) => this.productsService.getProduct(action.payload).pipe(
      map((product: Product) => (new productActions.LoadProductSuccess(product))),
      catchError(err => of(new productActions.LoadProductFail(err)))
    ))
  );

  @Effect()
  updateProduct$ = this.actions$.pipe(
    ofType(productActions.ProductActionsTypes.UpdateProduct),
    mergeMap((action: productActions.UpdateProduct) => this.productsService.updateProduct(action.payload).pipe(
      map((updatedProduct: Product) => (new productActions.UpdateProductSuccess(updatedProduct))),
      catchError(err => of(new productActions.UpdateProductFail(err)))
    ))
  );

  @Effect()
  addProduct$ = this.actions$.pipe(
    ofType(productActions.ProductActionsTypes.AddProduct),
    mergeMap((action: productActions.AddProduct) => this.productsService.addProduct(action.payload).pipe(
      map((addedProduct: Product) => (new productActions.AddProductSuccess(addedProduct))),
      catchError(err => of(new productActions.AddProductFail(err)))
    ))
  );

  @Effect()
  deleteProduct$ = this.actions$.pipe(
    ofType(productActions.ProductActionsTypes.DeleteProduct),
    mergeMap((action: productActions.DeleteProduct) => this.productsService.deleteProduct(action.payload).pipe(
      map( () => (new productActions.DeleteProductSuccess())),
      catchError(err => of(new productActions.DeleteProductFail(err)))
    ))
  );
}