import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryRoutingModule } from './delivery-routing.module';
import { DeliveryComponent } from './delivery.component';
import { DeliHeaderComponent } from './deli-header/deli-header.component';
import { SharedModule } from '../shared/shared.module';
import { DelHomeComponent } from './del-home/del-home.component';
import { AccountsModule } from '../accounts/accounts.module';


@NgModule({
  declarations: [
    DeliveryComponent,
    DeliHeaderComponent,
    DelHomeComponent
  ],
  imports: [
    CommonModule,
    DeliveryRoutingModule,
    AccountsModule,
    SharedModule
  ]
})
export class DeliveryModule { }
