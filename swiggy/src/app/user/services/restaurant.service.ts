import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { ZoneService } from './zone.service';
import { RadarService } from 'src/app/shared/services/radar.service';
import { HttpClient } from '@angular/common/http';
import { RestaurantInterface } from 'src/app/shared/interfaces/restaurant';
import { Cuisines } from 'src/app/shared/interfaces/cuisines';
import { AuthenticationService } from 'src/app/accounts/services/authentication.service';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private Rest = new BehaviorSubject<any>([]);
  nearRest$ = this.Rest.asObservable();
  
  private geoid!: string;
  isLoading = true
  restOrder = 'relavance'

  constructor(private zone$: ZoneService,
    private radar$: RadarService,
    private http: HttpClient,
    private auth$: AuthenticationService) {

    zone$.getCoordinates() 
    zone$.userCoord$.subscribe({
      next: coords => {

        this.isLoading = true
        
        radar$.checkUserInRestZone(coords.latitude, coords.longitude).subscribe({
          next: data => {
            if(data) {
              this.geoid = data
              this.http.get<RestaurantInterface>(`api/restaurant/?geoId=${data}`)
              .subscribe(
                (data) => {
                  this.Rest.next(data)
                  this.isLoading = false
                }
              )
            }
            else {
              this.Rest.next([])
              this.isLoading = false
            }
          }
        });

      }
    });

  }

  // functions
  getRestDetail(slug: string){
    let coords = {
      'latitude': 0,
      'longitude': 0
    }

    this.zone$.userCoord$.subscribe((data) => {
      coords = data
    })

    return this.http.get<RestaurantInterface>(`/api/restaurant/${slug}?latitude=${coords.latitude}&longitude=${coords.longitude}`)
  }

  getCuisine(slug: string){
    return this.http.get<Cuisines>(`/api/restaurant/user/cuisine/${slug}`)
  }

  // Filter
  changeOrder(order: string){
    let coords = {
      'latitude': 0,
      'longitude': 0
    }

    this.zone$.userCoord$.subscribe((data) => {
      coords = data
    })

    this.isLoading = true
    this.restOrder = order

    this.http.get<RestaurantInterface>(`api/restaurant/?geoId=${this.geoid}&latitude=${coords.latitude}&longitude=${coords.longitude}&order=${order}`)
    .subscribe(
      (data) => {
        this.Rest.next(data)
        this.isLoading = false
      }
    )

  }
}

