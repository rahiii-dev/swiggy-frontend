import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, catchError, mergeMap, take } from 'rxjs';
import { GeolocationService } from '@ng-web-apis/geolocation';
import { RadarService } from 'src/app/shared/services/radar.service';


@Injectable({
  providedIn: 'root'
})

export class ZoneService {

  private Place = new BehaviorSubject<string>('');
  userPlace$ = this.Place.asObservable();

  private Coordinates = new BehaviorSubject<any>('');
  userCoord$ = this.Coordinates.asObservable();

  constructor(
    private cookieservice: CookieService,
    private geolocation$: GeolocationService,
    private radar$: RadarService) { }

  getLoc(){
    return this.geolocation$.pipe(
      take(1),
      catchError((err) => {
        throw err.message
      }),
      mergeMap((position: any, index: number) => {
        return this.radar$.ReverseLoc(position.coords.latitude, position.coords.longitude)
      })
    ) 
  }

  autoComplete(place: string) {
    return this.radar$.AutoComplete(place)
  }

  setZone(lat: number, long: number, place:string='') {
    let data = {
      'coordinates': {
        'latitude' : lat,
        'longitude' : long
      },
      'place': place
    } 

    this.cookieservice.set('zone', JSON.stringify(data), 2, '/')

    this.Coordinates.next({
      'latitude' : lat,
      'longitude' : long
    })
    
    this.Place.next(place)
  }

  getPlace(): string {
    const zone = JSON.parse(this.cookieservice.get('zone'))
    this.Place.next(zone.place)
    return zone.place 
  }

  getCoordinates() {
    const zone = JSON.parse(this.cookieservice.get('zone'))
    this.Coordinates.next(zone.coordinates)
    return zone.coordinates
  }

  isInZone() {
    if(this.cookieservice.check('zone')){
      const data = JSON.parse(this.cookieservice.get('zone'))
      if(data) {
        return true
      }
    }
    return false
  }

}
