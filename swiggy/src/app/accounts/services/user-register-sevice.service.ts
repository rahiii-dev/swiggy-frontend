import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterSeviceService {
  constructor(private http: HttpClient) { }

  register(data:any) {
    return this.http.post<any>('/api/user/register', data)
  }

  UserIdValidator(): AsyncValidatorFn {
    return (conntrol: AbstractControl): Observable<ValidationErrors | null> =>{
      return this.http.get<any>(`/api/user/validation?userid=${conntrol.value}`)
      .pipe(
        map(res => {
          return res ? { UserIdExists: true } : null; 
        })
      );
    }
  }

  PhoneNoValidator(UserType: string): AsyncValidatorFn {
    return (conntrol: AbstractControl): Observable<ValidationErrors | null> =>{
      return this.http.get<any>(`/api/user/validation?phone_no=${conntrol.value}&user_type=${UserType}`)
      .pipe(
        map(res => {
          return res ? { PhoneNoExists: true } : null; 
        })
      );
    }
  }

  EmailValidator(UserType: string): AsyncValidatorFn {
    return (conntrol: AbstractControl): Observable<ValidationErrors | null> =>{
      return this.http.get<any>(`/api/user/validation?email=${conntrol.value}&user_type=${UserType}`)
      .pipe(
        map(res => {
          return res ? { EmailExists: true } : null; 
        })
      );
    }
  }
  
}
