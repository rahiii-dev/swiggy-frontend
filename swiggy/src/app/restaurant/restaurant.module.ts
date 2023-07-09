import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { RestaurantComponent } from './restaurant.component';
import { SharedModule } from '../shared/shared.module';
import { RestHeaderComponent } from './rest-header/rest-header.component';
import { RestHomeComponent } from './rest-home/rest-home.component';
import { RestOrdersComponent } from './rest-orders/rest-orders.component';
import { RestRegisterComponent } from './rest-register/rest-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestCuisineFormComponent } from './rest-cuisine-form/rest-cuisine-form.component';


@NgModule({
  declarations: [
    RestaurantComponent,
    RestHeaderComponent,
    RestHomeComponent,
    RestOrdersComponent,
    RestRegisterComponent,
    RestCuisineFormComponent
  ],
  imports: [
    CommonModule,
    RestaurantRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RestaurantModule { }
