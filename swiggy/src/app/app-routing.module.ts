import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { UserAuthComponent } from './accounts/user-auth/user-auth.component';
import { AuthGuardGuard } from './accounts/guards/auth-guard.guard';

const routes: Routes = [
  { path: '',
  canActivate: [AuthGuardGuard], 
  canMatch: [AuthGuardGuard],
  data: {
    usertype: 'user'
  },
  loadChildren: () => import('./user/user.module').then(m => m.UserModule),
 },
  { path: '',
  canMatch: [AuthGuardGuard],
  data: {
    usertype: 'restaurant'
  }, 
  loadChildren: () => import('./restaurant/restaurant.module').then(m => m.RestaurantModule),
  },
  { path: '',
  canMatch: [AuthGuardGuard],
  data: {
    usertype: 'delivery'
  },
  loadChildren: () => import('./delivery/delivery.module').then(m => m.DeliveryModule),
  },
  {path: 'auth/:type', component: UserAuthComponent},
  { path: '**', redirectTo: 'auth/login' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
