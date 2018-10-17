import { Product } from "../product";
import { ProductsListActions, ProductsListActionsTypes } from "./actions";

export interface ProductsState {
  products: Product[];
  error: string;
}

const initialState: ProductsState = {
  products: null,
  error: ''
}

export function reducer(state: ProductsState = initialState, action: ProductsListActions): ProductsState {

  switch(action.type) {

    case ProductsListActionsTypes.LoadProductsSuccess:
      return {
        ...state,
        products: action.payload,
        error: ''
      }

    case ProductsListActionsTypes.LoadProductsFail:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state;
  }
}