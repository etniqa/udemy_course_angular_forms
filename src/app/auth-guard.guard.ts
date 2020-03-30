import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})

// for guard (intercept route change and make checking (classes for what need to use this guard must be in ))
// CanActivate = for ordinary pages, CanActivateChild = for child pages
export class AuthGuardGuard implements CanActivate, CanActivateChild {
  canActivate(
    next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated()
      .then(isAuth => {
        if (isAuth) {
          console.log('form guard ' + isAuth);
          return true;
        } else {
          // if user is not authenticated then navigate to home page with queryParameters
          this.router.navigate(['/'], {
            queryParams: {
              auth: false
            }
          });
        }
      });
  }
  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(childRoute, state);
  }
}
