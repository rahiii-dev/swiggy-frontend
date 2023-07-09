import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate, CanMatch {
  constructor(private Auth : AuthenticationService, 
    private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const Usertype = route.data?.['usertype']
      const AuthUser = this.Auth.getUserType()
      const isAuthenticated = this.Auth.isLoggedIn()

      if (isAuthenticated && route.component?.name == 'UserAuthComponent'){
        this.router.navigateByUrl('/')
        return false
      }
      
      if(AuthUser == Usertype){
        return true;
      }
      return false;
  }

  canMatch(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const Usertype = route.data?.['usertype']
    const AuthUser = this.Auth.getUserType()
    
    if(AuthUser == Usertype){
      return true;
    }
    return false;
  }
}
