import * as fromRoot from '../../state/app.state';
import * as fromProducts from './reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export interface State extends fromRoot.State {
  products: fromProducts.ProductsState;
}

const getProductsFeatureState = createFeatureSelector<fromProducts.ProductsState>('products');

export const getProducts = createSelector(
  getProductsFeatureState,
  state => state.products
);

export const getError = createSelector(
  getProductsFeatureState,
  state => state.error
);