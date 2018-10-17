import { Injectable } from "@angular/core";

import { map, mergeMap, catchError } from "rxjs/operators";
import { of, Observable } from "rxjs";

import { ProductsService } from "../products.service";

import { Product } from "../product";

import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";

import * as productsListActions from "../state/actions";

@Injectable()
export class Effects {

  constructor(private actions$: Actions,
              private productsService: ProductsService) {}
  
  @Effect()
  loadProducts$: Observable<Action> = this.actions$.pipe(
    ofType(productsListActions.ProductsListActionsTypes.LoadProducts),
    mergeMap((action: productsListActions.LoadProducts) => this.productsService.getProducts().pipe(
      map((product: Product[]) => (new productsListActions.LoadProductsSuccess(product))),
      catchError(err => of(new productsListActions.LoadProductsFail(err)))
    ))
  );
}