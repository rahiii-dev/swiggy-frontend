import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/accounts/services/authentication.service';

@Injectable()
export class BackenAPIInterceptor implements HttpInterceptor {

  constructor(private Auth$: AuthenticationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (request.url.includes('https://api.radar.io/v1')) {
        const authReq = request.clone({
          headers: request.headers.set('Authorization', 'prj_test_pk_7cea420f8c39a4ad4f8ba0c14bb0124daaa53051')
        });
        return next.handle(authReq)
      }
    
    if(this.Auth$.isLoggedIn()){
      if (request.url.includes('/api')) {
        const authReq = request.clone({
          headers: request.headers.set('Authorization', `Token ${this.Auth$.getAuthorizationToken()}`)
        });
        return next.handle(authReq)
      }
    }

    return next.handle(request);
  }
}
