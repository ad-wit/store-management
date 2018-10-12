import { Injectable } from "@angular/core";

import { map, mergeMap, catchError } from "rxjs/operators";
import { of, Observable } from "rxjs";

import { UsersService } from "../../users-service.service";

import { User } from "../../user";

import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";

import * as userActions from "../state/actions";

@Injectable()
export class Effects {

  constructor(private actions$: Actions,
              private userService: UsersService) {}
  
  @Effect()
  loadUser$: Observable<Action> = this.actions$.pipe(
    ofType(userActions.UserActionsTypes.LoadUser),
    mergeMap((action: userActions.LoadUser) => this.userService.getUser(action.payload).pipe(
      map((user: User) => (new userActions.LoadUserSuccess(user))),
      catchError(err => of(new userActions.LoadUserFail(err)))
    ))
  );

  @Effect()
  updateUser$ = this.actions$.pipe(
    ofType(userActions.UserActionsTypes.UpdateUser),
    mergeMap((action: userActions.UpdateUser) => this.userService.updateUser(action.payload).pipe(
      map((updatedUser: User) => (new userActions.UpdateUserSuccess(updatedUser))),
      catchError(err => of(new userActions.UpdateUserFail(err)))
    ))
  );

  @Effect()
  addUser$ = this.actions$.pipe(
    ofType(userActions.UserActionsTypes.AddUser),
    mergeMap((action: userActions.AddUser) => this.userService.addUser(action.payload).pipe(
      map((addedUser: User) => (new userActions.AddUserSuccess(addedUser))),
      catchError(err => of(new userActions.AddUserFail(err)))
    ))
  );

  @Effect()
  deleteUser$ = this.actions$.pipe(
    ofType(userActions.UserActionsTypes.DeleteUser),
    mergeMap((action: userActions.DeleteUser) => this.userService.deleteUser(action.payload).pipe(
      map( () => (new userActions.DeleteUserSuccess())),
      catchError(err => of(new userActions.DeleteUserFail(err)))
    ))
  );
}