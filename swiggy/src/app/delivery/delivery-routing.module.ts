import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryComponent } from './delivery.component';
import { DelHomeComponent } from './del-home/del-home.component';
import { UserProfileComponent } from '../accounts/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: DeliveryComponent, 
  children: [
    {path: '', component: DelHomeComponent},
    {path: 'profile', component: UserProfileComponent},
  ]
  },
  { path: '**', redirectTo:'/'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryRoutingModule { }
