import { Product } from "../../product";
import { ProductActions, ProductActionsTypes } from "./actions";

export interface SelectedProductState {
  product: Product;
  error: string;
}

const initialState: SelectedProductState = {
  product: null,
  error: ''
}

export function reducer(state: SelectedProductState = initialState, action: ProductActions): SelectedProductState {

  switch(action.type) {

    case ProductActionsTypes.InitializeProduct:
      return {
        ...state,
        product: {
          id: 0,
          createdAt: '',
          name: '',
          price: null,
          inStock: null,
          code: null,
          description: '',
          type: ''
        }
      };

    case ProductActionsTypes.ResetProduct:
      return {
        ...state,
        product: null
      };

    case ProductActionsTypes.LoadProductSuccess:
      return {
        ...state,
        product: action.payload,
        error: ''
      };

    case ProductActionsTypes.UpdateProductSuccess:
      return {
          ...state,
          product: action.payload,
          error: ''
      };

    case ProductActionsTypes.UpdateProductFail:
      return {
          ...state,
          error: action.payload
      };

    case ProductActionsTypes.AddProductSuccess:
      return {
          ...state,
          product: action.paylaod,
          error: ''
      };

    case ProductActionsTypes.AddProductFail:
      return {
          ...state,
          error: action.payload
      };

    case ProductActionsTypes.DeleteProductSuccess:
      return {
          ...state,
          product: null,
          error: ''
      };

    case ProductActionsTypes.DeleteProductFail:
      return {
          ...state,
          error: action.payload
      };
      
    default: 
      return {
        ...state
      };
  }
}