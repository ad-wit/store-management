import { User } from "../../user";
import { UserActions, UserActionsTypes } from "./actions";

export interface SelectedUserState {
  user: User;
  error: string;
}

const initialState: SelectedUserState = {
  user: null,
  error: ''
}

export function reducer(state: SelectedUserState = initialState, action: UserActions): SelectedUserState {

  switch(action.type) {

    case UserActionsTypes.LoadUserSuccess:
      return {
        ...state,
        user: action.payload,
        error: ''
      }

    case UserActionsTypes.UpdateUserSuccess:
      return {
          ...state,
          user: action.payload,
          error: ''
      };

    case UserActionsTypes.UpdateUserFail:
      return {
          ...state,
          error: action.payload
      };

    case UserActionsTypes.AddUserSuccess:
      return {
          ...state,
          user: action.paylaod,
          error: ''
      };

    case UserActionsTypes.AddUserFail:
      return {
          ...state,
          error: action.payload
      };

    case UserActionsTypes.DeleteUserSuccess:
      return {
          ...state,
          user: null,
          error: ''
      };

    case UserActionsTypes.DeleteUserFail:
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