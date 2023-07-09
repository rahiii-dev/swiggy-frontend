import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError, throwError } from 'rxjs'
import { RadarInterface} from 'src/app/shared/interfaces/radar';
import { RadarContext } from 'src/app/shared/interfaces/radar-context';

@Injectable({
  providedIn: 'root'
})
export class RadarService {
  private endpoint = 'https://api.radar.io/v1'

  constructor(private http: HttpClient) { }

  ReverseLoc(lat:number, long:number){
    return this.http.get<RadarInterface>(`${this.endpoint}/geocode/reverse?coordinates=${lat},${long}`)
  }

  AutoComplete(place: string) {
    return this.http.get<RadarInterface>(`${this.endpoint}/search/autocomplete?query=${place}&country=IN&limit=5`)
  }

  contextGefence(lat: number, long: number) {
    return this.http.get<RadarContext>(`${this.endpoint}/context?coordinates=${lat},${long}`);
  }

  checkUserInRestZone(lat: number, long: number) {
    return this.http.get<RadarContext>(`${this.endpoint}/context?coordinates=${lat},${long}`)
    .pipe(
      map(data => {
        if(data.context.geofences[0] && data.context.geofences[0]?.['tag'] == 'restaurant') {
          return data.context.geofences[0].externalId;
        }

        return false;
      })
    );
  }

}
