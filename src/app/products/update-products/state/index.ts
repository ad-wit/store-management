import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProducts from '../../state/';
import * as fromSelectedProduct from './reducer';

export interface State extends fromProducts.State {

  selectedProduct: fromSelectedProduct.SelectedProductState;
}

const getSelectedProductFeatureState = createFeatureSelector<fromSelectedProduct.SelectedProductState>('selectedProduct');

export const getProduct = createSelector(
  getSelectedProductFeatureState,
  state => state.product
);

export const getError = createSelector(
  getSelectedProductFeatureState,
  state => state.error
);