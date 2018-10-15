import { Injectable } from '@angular/core';
import { Router, CanLoad, Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import { AuthService } from '../admin/auth.service';

@Injectable()
export  class UsersGuard implements CanLoad, CanActivate {

  constructor(private authService: AuthService,
              private router: Router) { }

  canLoad(route: Route): boolean {
    
    return this.authService.isLoggedIn();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    return this.authService.isLoggedIn();
  }
}
