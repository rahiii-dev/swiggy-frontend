import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { AccountsModule } from '../accounts/accounts.module';
import { UserSearchComponent } from './user-search/user-search.component';
import { RestaurantListComponent } from './user-home/restaurant-list/restaurant-list.component';
import { RestaurantDetailComponent } from './user-home/restaurant-detail/restaurant-detail.component';
import { UserSidebarComponent } from './user-header/user-sidebar/user-sidebar.component';
import { UserZoneComponent } from './user-zone/user-zone.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CartBtnComponent } from './user-home/cart-btn/cart-btn.component';


@NgModule({
    declarations: [
        UserComponent,
        UserHomeComponent,
        UserCartComponent,
        UserHeaderComponent,
        UserSearchComponent,
        RestaurantListComponent,
        RestaurantDetailComponent,
        UserSidebarComponent,
        UserZoneComponent,
        CartBtnComponent,
    ],
    imports: [
        CommonModule,
        UserRoutingModule,
        SharedModule,
        AccountsModule,
        AccountsModule,
        FormsModule,
    ]
})
export class UserModule { }
