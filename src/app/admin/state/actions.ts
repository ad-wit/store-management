import { Action } from '@ngrx/store';
import { Admin } from '../admin';

export enum AdminActionTypes {
  AdminLogin = '[Admin] Admin Login',
  AdminLoginSuccess = '[Admin] Admin Login Success',
  AdminLoginFail = '[Admin] Admin Login Fail',
  AdminLogout = '[Admin] Admin Logout'
}

export class AdminLogin implements Action {
  readonly type = AdminActionTypes.AdminLogin;

  constructor(public payload: string) {}
}

export class AdminLoginSuccess implements Action {
  readonly type = AdminActionTypes.AdminLoginSuccess;

  constructor(public payload: Admin) {}
}

export class AdminLoginFail implements Action {
  readonly type = AdminActionTypes.AdminLoginFail;

  constructor(public payload: string) {}
}

export class AdminLogout implements Action {
  readonly type = AdminActionTypes.AdminLogout;

  constructor() {}
}

export type AdminActions = 
  AdminLogin |
  AdminLoginSuccess |
  AdminLoginFail |
  AdminLogout;
