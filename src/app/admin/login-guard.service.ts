import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export  class LoginGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if(this.authService.isLoggedIn()) {

      this.router.navigate(['/users']);
    }

    return !this.authService.isLoggedIn();
  }
}
