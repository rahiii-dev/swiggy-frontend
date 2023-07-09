import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { BackendErrorInterceptor } from './shared/interceptors/backend-error.interceptor';
import { BackenAPIInterceptor } from './shared/interceptors/backen-api.interceptor';
import { POSITION_OPTIONS } from '@ng-web-apis/geolocation';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CookieService,
    {
      provide: POSITION_OPTIONS,
      useValue: {enableHighAccuracy: true},
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BackenAPIInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BackendErrorInterceptor,
      multi: true
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
