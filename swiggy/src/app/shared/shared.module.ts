import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LocMapComponent } from './loc-map/loc-map.component';
import { ModelComponent } from './model/model.component';
import { RestLoadingComponent } from './rest-loading/rest-loading.component';
import { RestListLoadingComponent } from './rest-list-loading/rest-list-loading.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { CuisineLoadingComponent } from './cuisine-loading/cuisine-loading.component';



@NgModule({
  declarations: [
    HeaderComponent,
    LocMapComponent,
    ModelComponent,
    RestLoadingComponent,
    RestListLoadingComponent,
    LoadingSpinnerComponent,
    CuisineLoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    LocMapComponent,
    ModelComponent,
    RestLoadingComponent,
    CuisineLoadingComponent,
    LoadingSpinnerComponent,
    RestListLoadingComponent,
  ]
})
export class SharedModule { }
