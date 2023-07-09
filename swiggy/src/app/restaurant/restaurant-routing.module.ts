import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantComponent } from './restaurant.component';
import { RestHomeComponent } from './rest-home/rest-home.component';
import { RestOrdersComponent } from './rest-orders/rest-orders.component';
import { RestRegisterComponent } from './rest-register/rest-register.component';
import { UserProfileComponent } from '../accounts/user-profile/user-profile.component';
import { CanRegisterGuard } from './guards/can-register.guard';

const routes: Routes = [
  { path: '', component: RestaurantComponent,
    children: [
      {path: '', component: RestHomeComponent},
      {path: 'orders', component: RestOrdersComponent},
      {path: 'profile', component: UserProfileComponent},
    ]
   },
  {path: 'register', component:RestRegisterComponent,
  canActivate:[CanRegisterGuard]
  },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
