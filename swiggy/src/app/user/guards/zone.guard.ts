import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ZoneService } from '../services/zone.service';

@Injectable({
  providedIn: 'root'
})
export class ZoneGuard implements CanActivate, CanMatch {

  constructor(private zoneservice: ZoneService,
    private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(this.zoneservice.isInZone()){
      return true;
    }
    else {
      this.router.navigate(['/']);
      return false;
    }
  }

  canMatch(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const component = route.component?.name;
    const approved = this.zoneservice.isInZone();

    if (approved == true && component == 'UserComponent'){
      return true;
    }
    
    if (approved == false && component == 'UserZoneComponent'){
      return true;
    }


    return false;
  }

}
