import { Action } from '@ngrx/store';
import { User } from '../../user';

export enum UsersListActionsTypes {
  LoadUsers = '[User] Load Users',
  LoadUsersSuccess = '[User] Load Users Success',
  LoadUsersFail = '[User] Load Users Fail'
}

export class LoadUsers implements Action {

  readonly type = UsersListActionsTypes.LoadUsers;

  constructor() {}
}

export class LoadUsersSuccess implements Action {

  readonly type = UsersListActionsTypes.LoadUsersSuccess;

  constructor(public payload: User[]) {}
}

export class LoadUsersFail implements Action {

  readonly type = UsersListActionsTypes.LoadUsersFail;

  constructor(public payload: string) {}
}

export type UsersListActions = 
  LoadUsers |
  LoadUsersSuccess |
  LoadUsersFail;