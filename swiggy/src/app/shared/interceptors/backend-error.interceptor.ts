import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class BackendErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {

        if (error.status > 400 && error.status < 500){
          console.log("CLIENT-SIDE-ERROR:")
          return throwError({
            message: "Please try after some time."
          })
        }

        if (error.error instanceof ErrorEvent) {

          // A client-side or network error occurred. Handle it accordingly.
          console.log("CLIENT-SIDE:")
          return throwError(error.message)

        } else {
          
          // server-side
          if (error.status == 0 || error.status >= 500){
            return throwError({
              'message': "Server error please try after some time.",
              'error-type': 'Backend Error'
            })
          }
          else {
            // radar-error
            if(error.error.meta) {
              return throwError({
                'message': 'Please try again.',
                'error-type': 'Radar Api Error'
              })
            }
            return throwError(error.error)
          }
        }
      })
    );
  }
}
