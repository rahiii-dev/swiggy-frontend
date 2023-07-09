import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { catchError, map, throwError } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  errorData!: {};
  redirectUrl!: string;

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  authenticate(data: any) {
    return this.http.post<any>('/api/user/auth', data)
    .pipe(
      map(user => {
      if (user && user.token && user.usertype) {
        this.cookieService.delete('guest','/')
        this.cookieService.set('Swiggier', JSON.stringify(user), 5, '/')
      }
    })
    )
  
  }

  isLoggedIn() {
    if (this.cookieService.check('Swiggier')) {
      const currentUser = JSON.parse(this.cookieService.get('Swiggier'))

      if(currentUser.token) {
        return true
      }
    }
    return false;
  }

  setGuestUser() {
    const data = {
      usertype : 'user'
    }
    const userId = uuidv4();

    this.cookieService.set('Swiggier', JSON.stringify(data), 5, '/')

    if(!this.isGuestUser()){
      this.cookieService.set('guest', JSON.stringify(userId), 5, '/')
    }

  }

  getGuestId() {
    return JSON.parse(this.cookieService.get('guest'))
  }

  isGuestUser() {
    return this.cookieService.check('guest')
  }


  getAuthorizationToken() {
    const currentUser = JSON.parse(this.cookieService.get('Swiggier'));
    return currentUser.token;
  }

  getUserType() {
    if(this.cookieService.check('Swiggier')){
      const currentUser = JSON.parse(this.cookieService.get('Swiggier'));
      return currentUser.usertype;
    }

    return 'No User'
  }

  logout() {
    this.cookieService.deleteAll('/')
    this.cookieService.deleteAll('/auth')
  }
}

