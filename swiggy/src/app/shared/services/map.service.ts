import { Injectable } from '@angular/core';
import { GeolocationService } from '@ng-web-apis/geolocation';
import * as L from 'leaflet';
import 'leaflet-draw';
import { catchError, map, take } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private geolocation$: GeolocationService) { }

  setTilelayer(map: any, type:string='streets'){
     // google
    // streets: 'http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z},
    // hybrid: 'http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}'
    // satelite: 'http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
    // terrain: 'http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
    // traffic: 'https://{s}.google.com/vt/lyrs=m@221097413,traffic&x={x}&y={y}&z={z}'
    // subdomains:['mt0','mt1','mt2','mt3']

    let tileUrl = "http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"

    if (type == "satelite"){
      tileUrl = 'http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}'
    }

    const tiles = L.tileLayer(tileUrl, {
        maxZoom: 18,
        minZoom: 3,
        subdomains:['mt0','mt1','mt2','mt3']
      });  
    
    tiles.addTo(map)
    return tiles
  }

  setMarker(map:any, cordinates: [longitude: number, latitude: number] = [ 22.323691, 77.985996 ]) {
    const customIcon = L.icon({
      className: 'custom-marker',
      iconUrl: "assets/images/map-marker.png",
      iconSize: [30, 46],
      iconAnchor: [15, 46],
    })

    const marker = L.marker(cordinates, {
      draggable: true,
      icon: customIcon,
    });

    marker.addTo(map)
    return marker
  }

  setStoreMarker(map:any, cordinates: [longitude: number, latitude: number]){
    const customIcon = L.icon({
      className: 'custom-marker',
      iconUrl: "assets/images/store.png",
      iconSize: [30, 30]
    })

    const marker = L.marker(cordinates, {
      draggable: true,
      icon: customIcon,
    });

    marker.addTo(map)
    marker.addEventListener('click', ()=> {
      map.setZoom(11);
      map.panTo(cordinates);
    })
    return marker
  }

  setCircleMarker(map: any, cordinates: [longitude: number, latitude: number] = [ 22.323691, 77.985996 ]) {
    const cMarker = L.circleMarker(cordinates, {
      color: '#fb7e18',
      radius: 50
    })
    cMarker.addTo(map)
    return cMarker;
  }

  setPolygon(map: any, coords: any[][]){
    let polygon = L.polygon(coords , {
      color: '#fb7e18'
    });

    polygon.addTo(map)

  }

  setGeometryDat(map: any, data: any){
    let layer = L.geoJSON(data, {
      
    })
    layer.setStyle({
      color: '#fb7e18'
    })

    layer.addTo(map)
  }

  getLocation(){
    return this.geolocation$.pipe(
      take(1),
      catchError((err) => {
        throw err.message
      }),
      map((data) => {
        return new L.LatLng(data.coords.latitude, data.coords.longitude);
      })

    )
  }

  getLeafLatLong(lat: number, long: number) {
    return new L.LatLng(lat, long);
  }
}
