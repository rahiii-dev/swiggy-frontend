import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, Route, RouterModule, RouterStateSnapshot, Routes, UrlSegment } from '@angular/router';
import { UserComponent } from './user.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserProfileComponent } from '../accounts/user-profile/user-profile.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { RestaurantDetailComponent } from './user-home/restaurant-detail/restaurant-detail.component';
import { UserZoneComponent } from './user-zone/user-zone.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { ZoneGuard } from './guards/zone.guard';
import { UserAuthComponent } from '../accounts/user-auth/user-auth.component';
import { AuthGuardGuard } from '../accounts/guards/auth-guard.guard';

const routes: Routes = [
  {path: '', component: UserZoneComponent, canMatch: [ZoneGuard]},
  { 
    path: '', component: UserComponent, canMatch: [ZoneGuard], canActivate: [ZoneGuard],
    children: [
      {path: '', component: UserHomeComponent},
      {path: 'search', component: UserSearchComponent, },
      {path: 'profile', component: UserProfileComponent},
      {path: 'restaurants/:slug', component: RestaurantDetailComponent},
    ]
 },
 {path: 'cart', component: UserCartComponent, canActivate: [ZoneGuard]},
 {path: 'zonedin', redirectTo:'/'},

 {path: 'auth/:type', component: UserAuthComponent,
  canActivate: [AuthGuardGuard]},

 {path: '**', redirectTo:'/'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
