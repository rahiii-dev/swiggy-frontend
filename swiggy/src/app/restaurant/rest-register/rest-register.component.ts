import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RadarService } from 'src/app/shared/services/radar.service';
import { RestaurantService } from '../services/restaurant.service';
import { MapService } from 'src/app/shared/services/map.service';

@Component({
  selector: 'app-rest-register',
  templateUrl: './rest-register.component.html',
  styleUrls: ['./rest-register.component.css']
})
export class RestRegisterComponent implements OnInit{
  step: number = 1;
  stepOne: boolean = false;
  stepTwo: boolean = false;
  stepThree: boolean = false;
  
  latitude!: number;
  longitude!: number;
  geofenceID!: string;

  formError!: string;
  result!: string;

  RestForm!: FormGroup;
  private initResForm() {
    this.RestForm = new FormGroup({
      "name": new FormControl(null, [Validators.required, Validators.minLength(3)]),
      "address": new FormControl(null, [Validators.required, Validators.minLength(3)]),
      "specials": new FormControl(null, [Validators.required, Validators.minLength(3)]),
      "slug": new FormControl(null, [Validators.required, Validators.minLength(3)], [this.rest$.SlugValidator()]),
      "image": new FormControl(null, [Validators.required]),
      "fileSource": new FormControl(null, [Validators.required]),
      "opens_at": new FormControl(null, [Validators.required]),
      "closes_at": new FormControl(null, [Validators.required]),
    })
  }

  private convertTimeTo24HourFormat(controlName: string): void {
    const timeValue = this.RestForm.get(controlName)?.value;
    const [hour, minute] = timeValue.split(':');
    const isPM = timeValue.includes('PM');
    const convertedHour = isPM ? Number(hour) + 12 : Number(hour);
    const newTimeValue = `${convertedHour.toString().padStart(2, '0')}:${minute}`;
    this.RestForm.get(controlName)?.setValue(newTimeValue, { emitEvent: false });
  }


  constructor(private radar$: RadarService,
     private rest$: RestaurantService,
     private map$: MapService ){}

  ngOnInit(): void {
    this.initResForm()
    this.RestForm.get('opens_at')?.valueChanges.subscribe(() => {
      this.convertTimeTo24HourFormat('opens_at');
    });

    this.RestForm.get('closes_at')?.valueChanges.subscribe(() => {
      this.convertTimeTo24HourFormat('closes_at');
    });
  }

  getUserLocation(coords: any){
    this.result = "Checking for registration..."
    this.formError= '';

    this.radar$.checkUserInRestZone(coords.lat, coords.lng).subscribe({
      next: data => {
        if(!data) {
          this.result = '';
          this.formError = "We are not availabe in this loaction."
        }
        else {
          this.geofenceID = data
          this.latitude = coords.lat;
          this.longitude = coords.lng;
          this.stepOne = true;
          this.formError = ''
          this.result = 'Proceed For next step.';
        } 

      }
    });
  }

  nextStep(){
    this.formError = ''
    this.result = '';
    
    if(!this.stepOne) {
      this.formError = 'Please Select Your Location.'
      return
    }
    else {
      this.step = 2
    }
  }

  getMap(map: any){
    const Map = map
   
    this.rest$.getResZones().subscribe({
      next: reslt => {
        reslt.geofences.forEach(data => {
          this.map$.setStoreMarker(Map, [data.geometryCenter.coordinates[1], data.geometryCenter.coordinates[0]])
          this.map$.setGeometryDat(Map, data.geometry)
        })
      }
    })
  }

  // restForm
  onRestFileChange(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.RestForm.patchValue({
        fileSource: file
      })
    }
  }

  RestFormSubmit() {
    this.result = ''
    this.formError = ''

    const formData = new FormData();

    // Append the file and other data to the form
    formData.append('image', this.RestForm.get('fileSource')?.value);
    formData.append('name', this.RestForm.get('name')?.value);
    formData.append('address', this.RestForm.get('address')?.value);
    formData.append('specials', this.RestForm.get('specials')?.value);
    formData.append('slug', this.RestForm.get('slug')?.value);
    formData.append('opens_at', this.RestForm.get('opens_at')?.value);
    formData.append('closes_at', this.RestForm.get('closes_at')?.value);
    formData.append('latitude', `${this.latitude}`);
    formData.append('longitude', `${this.longitude}`);
    formData.append('geofence_id', this.geofenceID);

    this.result = 'Registering Your Restaurant...'

    this.rest$.RestaurantRegiter(formData).subscribe({
      next: data => {
        this.formError = ''
        this.result = ''
        this.stepTwo = true;
        this.step = 3
      },
      error: err => {
        this.result = ''
        this.formError = err.message
      }
    });

  }
}
