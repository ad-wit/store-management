import { Action } from '@ngrx/store';
import { User } from '../../user';

export enum UserActionsTypes {
  InitializeUser = '[User] Initialize User',
  ResetUser = '[User] Reset User',
  LoadUser = '[User] Load User',
  LoadUserSuccess = '[User] Load User Success',
  LoadUserFail = '[User] Load User Fail',
  UpdateUser = '[User] Update User',
  UpdateUserSuccess = '[User] Update User Success',
  UpdateUserFail = '[User] Update User Fail',
  AddUser = '[User] Add User',
  AddUserSuccess = '[User] Add User Success',
  AddUserFail = '[User] Add User Fail',
  DeleteUser = '[User] Delete User',
  DeleteUserSuccess = '[User] Delete User Success',
  DeleteUserFail = '[User] Delete User Fail'
}

export class InitializeUser implements Action {
  readonly type = UserActionsTypes.InitializeUser;

  constructor() {}
}

export class resetUser implements Action {
  readonly type = UserActionsTypes.ResetUser;

  constructor() {}
}

export class LoadUser implements Action {
  readonly type = UserActionsTypes.LoadUser;

  constructor(public payload: number) {}
}

export class LoadUserSuccess implements Action {
  readonly type = UserActionsTypes.LoadUserSuccess;

  constructor(public payload: User) {}
}

export class LoadUserFail implements Action {
  readonly type = UserActionsTypes.LoadUserFail;

  constructor(public payload: string) {}
}

export class UpdateUser implements Action {
  readonly type = UserActionsTypes.UpdateUser;

  constructor(public payload: User) {}
}

export class UpdateUserSuccess implements Action {
  readonly type = UserActionsTypes.UpdateUserSuccess;

  constructor(public payload: User) {}
}

export class UpdateUserFail implements Action {
  readonly type = UserActionsTypes.UpdateUserFail;

  constructor(public payload: string) {}
}

export class AddUser implements Action {
  readonly type = UserActionsTypes.AddUser;

  constructor(public payload: User) {}
}

export class AddUserSuccess implements Action {
  readonly type = UserActionsTypes.AddUserSuccess;

  constructor(public paylaod: User) {}
}

export class AddUserFail implements Action {
  readonly type = UserActionsTypes.AddUserFail;

  constructor(public payload: string) {}
}

export class DeleteUser implements Action {
  readonly type = UserActionsTypes.DeleteUser;

  constructor(public payload: number) {}
}

export class DeleteUserSuccess implements Action {
  readonly type = UserActionsTypes.DeleteUserSuccess;

  constructor() {}
}

export class DeleteUserFail implements Action {
  readonly type = UserActionsTypes.DeleteUserFail;

  constructor(public payload: string) {}
}

export type UserActions = 
  InitializeUser |
  resetUser |
  LoadUser |
  LoadUserSuccess |
  LoadUserFail |
  UpdateUser |
  UpdateUserSuccess |
  UpdateUserFail |
  AddUser |
  AddUserSuccess |
  AddUserFail |
  DeleteUser |
  DeleteUserSuccess |
  DeleteUserFail;