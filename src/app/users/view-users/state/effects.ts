import { Injectable } from "@angular/core";

import { map, mergeMap, catchError } from "rxjs/operators";
import { of, Observable } from "rxjs";

import { UsersService } from "../../users.service";

import { User } from "../../user";

import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";

import * as usersListActions from "../state/actions";

@Injectable()
export class Effects {

  constructor(private actions$: Actions,
              private userService: UsersService) {}
  
  @Effect()
  loadUsers$: Observable<Action> = this.actions$.pipe(
    ofType(usersListActions.UsersListActionsTypes.LoadUsers),
    mergeMap((action: usersListActions.LoadUsers) => this.userService.getUsers().pipe(
      map((users: User[]) => (new usersListActions.LoadUsersSuccess(users))),
      catchError(err => of(new usersListActions.LoadUsersFail(err)))
    ))
  );
}