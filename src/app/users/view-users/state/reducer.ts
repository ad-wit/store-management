import { User } from "../../user";
import { UsersListActions, UsersListActionsTypes } from "./actions";

export interface UsersListState {
  users: User[];
  error: string;
}

const initialState: UsersListState = {
  users: null,
  error: ''
}

export function reducer(state: UsersListState = initialState, action: UsersListActions): UsersListState {

  switch(action.type) {

    case UsersListActionsTypes.LoadUsersSuccess:
      return {
        ...state,
        users: action.payload,
        error: ''
      }

    case UsersListActionsTypes.LoadUsersFail:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state;
  }
}