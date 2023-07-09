import { Component, OnDestroy, OnInit} from '@angular/core';
import { ZoneService } from '../services/zone.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/accounts/services/authentication.service';

@Component({
  selector: 'app-user-zone',
  templateUrl: './user-zone.component.html',
  styleUrls: ['./user-zone.component.css']
})

export class UserZoneComponent implements OnInit {
  inpError!: string;
  userLocation : string = '';
  placesArray: Array<any>= [];
  mySubscription: any;

  loggedIn: boolean = false;

  private userLat! : number;
  private userLong! : number;


  constructor(
    private ZoneService: ZoneService, 
    private router: Router,
    private Auth$: AuthenticationService) {
  }

  ngOnInit(): void {
    this.loggedIn = this.Auth$.isLoggedIn()
  }

  findLoc() {
    this.inpError = '';
    this.userLocation = 'Fetching your Loaction...'

    this.ZoneService.getLoc().subscribe({
      next: data => {
        this.userLat = data.addresses[0].latitude
        this.userLong = data.addresses[0].longitude
        let userLocation = ''
        
        if (data.addresses[0].placeLabel) {
          userLocation += data.addresses[0].placeLabel + ', ' 
        }
        if (data.addresses[0].city) {
          userLocation += data.addresses[0].city + ', ' 
        }
        if (data.addresses[0].state) {
          userLocation += data.addresses[0].state
        }

        if (data.addresses[0].formattedAddress) {
          userLocation = data.addresses[0].formattedAddress
        }

        this.userLocation = userLocation
      },
      error: err => {
                this.userLocation = ''
                this.inpError = err.message
            }
    })
  }
  

  suggestLoc() {
    this.inpError = '';
    this.placesArray = []

    if (this.userLocation.length > 1) {
      this.ZoneService.autoComplete(this.userLocation).subscribe((data) => {
        this.placesArray = data.addresses
      })
    }
  }

  submitSuggested(place: string, lat: number, long: number) {
    this.placesArray = []

    this.userLat = lat;
    this.userLong = long;
    this.userLocation = place
  }

  formSubmit(form: any) {
    this.inpError = ''

    if (form.valid) {
      this.ZoneService.setZone(this.userLat, this.userLong, form.value.userLocation)
      this.router.navigateByUrl('/zonedin')
    }
    else {
      this.inpError = 'Enter your location';
    }
  }
}
