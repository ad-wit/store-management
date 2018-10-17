import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { map, mergeMap, catchError, tap } from "rxjs/operators";
import { of, Observable } from "rxjs";

import { Action } from "@ngrx/store";
import { Actions, Effect, ofType } from "@ngrx/effects";

import * as adminActions from '../state/actions';
import { Admin } from "../admin";

@Injectable()
export class Effects {

  constructor(private actions$: Actions,
              private http: HttpClient) {}

  private adminUrl = 'http://5bbe0c9a8be32700139e3521.mockapi.io/admin/';
  
  @Effect()
  getAdmin$: Observable<Action> = this.actions$.pipe(
    ofType(adminActions.AdminActionTypes.AdminLogin),
    mergeMap(
      (action: adminActions.AdminLogin) => 
        this.http.get<Admin[]>(`${this.adminUrl}?filter=${action.payload}`).pipe(
          tap(data => console.log(JSON.stringify(data))),
          map((recivedAdmin: Admin[]) => {
            if(recivedAdmin.length == 1) {
              const data = recivedAdmin[0];
              let admin: Admin = {
                id: data.id,
                username: data.username,
                role: data.role
              };
              localStorage.setItem('admin', JSON.stringify(admin));
              return (new adminActions.AdminLoginSuccess(admin));
            } else {
              return (new adminActions.AdminLoginFail('Invalid username or password'));
            }
          }),
          catchError(err => of(new adminActions.AdminLoginFail(err)))
    ))
  );
}