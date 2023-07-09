import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { UserProfile } from '../interfaces/user-profile';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  private Username = new BehaviorSubject<string>('')
  username$ = this.Username.asObservable()

  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get<UserProfile>('/api/user').pipe(
      map(data => {
        this.Username.next(data.full_name)
        return data
      })
    )
  }

  updateUser(data: any){
    return this.http.put('/api/user/', data)
  }

  getUserName(){
    return this.getUser().pipe(
      map( data => {
        this.Username.next(data.full_name)
        return data.full_name
      })
    )
  }

}
