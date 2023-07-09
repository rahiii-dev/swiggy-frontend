import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { AuthenticationService } from 'src/app/accounts/services/authentication.service';
import { RestaurantInterface } from 'src/app/shared/interfaces/restaurant'
import { Geofencezones } from '../interfaces/geofencezones';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Cuisine } from 'src/app/shared/interfaces/cuisine';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient, private cookie$: CookieService, private Auth: AuthenticationService) { }

  getRest(){
    return this.http.get<RestaurantInterface>('/api/restaurant/profile/')
    .pipe(
      map(data => {

        if(data.slug){
          this.cookie$.set('slug', data.slug, 2, '/')
        }
        return data
      })
    );
  }

  getResZones(){
    return this.http.get<Geofencezones>('/api/restaurant/zones')
  }

  RestaurantRegiter(data: any) {
    return this.http.post('/api/restaurant/register/', data)
  }
  
  AddCuisine(data: any) {
    return this.http.post('/api/restaurant/cuisine/', data)
  }

  getCuisine(id: any) {
    return this.http.get<Cuisine>(`/api/restaurant/cuisine/${id}`)
  }

  updateCuisine(id: any, data: any) {
    return this.http.put(`/api/restaurant/cuisine/${id}`, data)
  }

  deleteCuisine(id:any){
    return this.http.delete(`/api/restaurant/cuisine/${id}`)
  }

  // validators
  SlugValidator(): AsyncValidatorFn {
    return (conntrol: AbstractControl): Observable<ValidationErrors | null> =>{
      return this.http.get<any>(`/api/restaurant/validation?slug=${conntrol.value}`)
      .pipe(
        map(res => {
          return res ? { SlugExists: true } : null; 
        })
      );
    }
  }

}
