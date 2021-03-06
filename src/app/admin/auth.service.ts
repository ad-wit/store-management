import { Injectable } from '@angular/core';

import { Admin } from './admin';

import { Store, select } from '@ngrx/store';

import * as adminActions from './state/actions';
import * as fromAdmin from './state';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
    private admin: Admin | null;
    private online: boolean = false;
    redirectUrl: string;

    constructor(private store: Store<fromAdmin.State>,
                private router: Router) {

      this.store.pipe(select(fromAdmin.getAdmin)).subscribe(admin => this.admin = admin);

      this.store.pipe(select(fromAdmin.getOnlineStatus)).subscribe(status => this.online = status);
    }

    isLoggedIn(): boolean {

      let admin = localStorage.getItem('admin');

      if(admin != null) {

        this.store.dispatch(new adminActions.AdminLoginSuccess(JSON.parse(admin)));
        return true;
      }

      return this.online;

    }

    getAdminRole(): string {

      return this.admin.role;
    }

    login(userName: string, password: string): void {

      if(!this.online) {

        this.store.dispatch(new adminActions.AdminLogin(userName));
      }
    }

    logout(): void {

      if(this.online) {

        this.store.dispatch(new adminActions.AdminLogout);
        localStorage.removeItem('admin');
        this.router.navigateByUrl('/login');
      }
    }
}
