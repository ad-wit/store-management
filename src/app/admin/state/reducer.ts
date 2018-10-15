import { Admin } from '../admin';

import { AdminActions, AdminActionTypes } from './actions';

export interface AdminState {
  admin: Admin;
  online: boolean;
  error: string;
}

const initialState: AdminState = {
  admin: null,
  online: false,
  error: ''
};

export function reducer(state = initialState, action: AdminActions): AdminState {
  switch (action.type) {

    case AdminActionTypes.AdminLoginSuccess:
      const admin = action.payload;

      return {
        ...state,
        online: true,
        admin: admin,
        error: ''
      };

    case AdminActionTypes.AdminLoginFail:
      return {
        ...state,
        error: action.payload
      };

    case AdminActionTypes.AdminLogout:
      return {
        ...state,
        online: false,
        admin: null
      }

    default:
      return state;
  }
}
