import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { LoginComponent } from './login/login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { RestaurantSignupComponent } from './restaurant-signup/restaurant-signup.component';
import { DeliverySignupComponent } from './delivery-signup/delivery-signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserProfileComponent,
    UserAuthComponent,
    LoginComponent,
    UserSignupComponent,
    RestaurantSignupComponent,
    DeliverySignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    UserProfileComponent,
    UserAuthComponent,
    UserSignupComponent,
    LoginComponent,
    UserSignupComponent
  ]
})
export class AccountsModule { }
