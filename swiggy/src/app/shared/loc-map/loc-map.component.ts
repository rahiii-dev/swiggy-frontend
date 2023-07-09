import { Component, AfterViewInit, OnInit, Output, EventEmitter, Input } from '@angular/core';
import * as L from 'leaflet';
import { MapService } from '../services/map.service';
import { RadarService } from '../services/radar.service';

@Component({
  selector: 'app-loc-map',
  templateUrl: './loc-map.component.html',
  styleUrls: ['./loc-map.component.css']
})
export class LocMapComponent implements AfterViewInit, OnInit {
  @Input()lat: number = 22.323691;
  @Input()lng: number = 77.985996;
  @Input()zoom: number = 5;

  @Output() UserLocation = new EventEmitter<any>();
  @Output() UserPlace = new EventEmitter<any>();
  @Output() GetMap = new EventEmitter<any>();

  private Map!: any;
  private Marker!: any;
  private CircMarker!: any;
  private Tiles!: any;

  placesArray: Array<any>= [];
  satelite: boolean = false;
  fullscreen: boolean = false;

  latitude!: number;
  longitude!: number;
  slectedplace: string = 'India';


  private initMap(): any {
    this.Map = L.map('map', {
      center: [ this.lat, this.lng ],
      zoom: this.zoom,
      zoomControl: false 
    });
  }

  constructor (private mapservice: MapService, private Radar$: RadarService){}

  ngOnInit(): void {
    this.latitude = this.lat;
    this.longitude = this.lng;
    this.setPlaceInfo(this.lat, this.lng)
  }

  setPlaceInfo(lat: number, long: number) {
    this.latitude = lat;
    this.longitude = long;
    this.Radar$.ReverseLoc(lat, long).subscribe({
      next: data => {
        const place = data.addresses[0].placeLabel
        const state = data.addresses[0].state
        if (place && state) {
          this.slectedplace = `${data.addresses[0].placeLabel}, ${data.addresses[0].state}`
        }
        else {
          this.slectedplace = ''
        }
      }
    })
  }

  ngAfterViewInit(): void {
    this.initMap();
    
    this.GetMap.emit(this.Map)

    this.Tiles = this.mapservice.setTilelayer(this.Map)
    this.Marker =  this.mapservice.setMarker(this.Map, [this.latitude, this.longitude])
    this.CircMarker = this.mapservice.setCircleMarker(this.Map, [this.latitude, this.longitude])

    this.CircMarker.setStyle({
      opacity: 0,
      fillOpacity: 0
    })

    const Map = this.Map;
    const Marker = this.Marker;
    const CircMarker = this.CircMarker;

    const Place = (lat: number, long: number) => {
      this.setPlaceInfo(lat, long)
    }

    this.Marker.on('dragend', function (e: any) {
      const coords = e.target.getLatLng()
        Map.panTo(coords);
        CircMarker.setLatLng(coords);
        Place(coords.lat, coords.lng);
    });

    this.Map.on('click', function (e: any) {
      Map.panTo(e.latlng);
      Marker.setLatLng(e.latlng);
      CircMarker.setLatLng(e.latlng);
      Place(e.latlng.lat, e.latlng.lng)
    });    
  }

  detect(){
    this.mapservice.getLocation().subscribe({
      next: data => {
        this.Map.setZoom(15);
        this.Map.panTo(data);
        this.Marker.setLatLng(data)
        this.CircMarker.setLatLng(data)
        this.setPlaceInfo(data.lat, data.lng)
      },
      error: err => {
        alert(err)
      }
    })
  }

  changeTiles() {
    this.satelite = !this.satelite;

    if (this.satelite){
      this.Tiles.setUrl('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}')
      this.CircMarker.setStyle({
        color: '#f4f4f4',
        opacity: 1,
        fillOpacity: 0.25
      })
    }
    else{
      this.Tiles.setUrl('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}')
      this.CircMarker.setStyle({
        color: '#fb7e18',
        opacity: 0,
        fillOpacity: 0
      })
    }
  }

  suggestPlace(place:any) {
    this.placesArray = []
    this.Radar$.AutoComplete(place).subscribe({
      next: data => {
        this.placesArray = data.addresses
      },
      error: err => this.placesArray = []
    })
  }

  toglleScreen() {
   this.fullscreen = !this.fullscreen
   this.Tiles.redraw();
  }

  submitSuggested(place: any, lat: number, long: number){
    const location = this.mapservice.getLeafLatLong(lat, long)
    this.Map.setZoom(17);
    this.Map.panTo(location);
    this.Marker.setLatLng(location)
    this.CircMarker.setLatLng(location)
    this.slectedplace = `${place.placeLabel}, ${place.state}`;
    this.latitude = lat;
    this.longitude = long;
    this.placesArray = []
  }

  SubmitUserLocation() {
    let coords = this.mapservice.getLeafLatLong(this.latitude, this.longitude)
    this.UserLocation.emit(coords)
    this.UserPlace.emit(this.slectedplace)
  }
}
