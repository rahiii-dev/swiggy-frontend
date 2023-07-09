import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ZoneService } from '../../services/zone.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent {
  @Input('closed') sidebarClosed: boolean = true;
  @Output() toggle:EventEmitter<boolean>= new EventEmitter(); 

  inpError!: string;
  userLocation : string = '';
  placesArray: Array<any>= [];
  
  constructor(private ZoneService: ZoneService) {}

  findLoc() {
    this.inpError = '';
    this.userLocation = 'Fetching your Loaction...'

    this.ZoneService.getLoc().subscribe({
      next: data => {
        const userLat = data.addresses[0].latitude
        const userLong = data.addresses[0].longitude
        
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


        this.submitSuggested(userLocation, userLat, userLong)
      },
      error: err => {
                this.userLocation = ''
                this.inpError = err
            }
    })
  }
  
  suggestLoc() {
    this.inpError = ''
    this.placesArray = []

    if (this.userLocation.length > 1) {
      this.ZoneService.autoComplete(this.userLocation).subscribe((data) => {
        this.placesArray = data.addresses
      })
    }
  }

  submitSuggested(place: string, lat: number, long: number) {
    this.placesArray = []
    this.ZoneService.setZone(lat, long, place)
    this.toggleSidebar()
  }

  toggleSidebar() {
    this.userLocation = ''
    this.ZoneService.getPlace()
    this.toggle.emit(!this.sidebarClosed)
  }
}
