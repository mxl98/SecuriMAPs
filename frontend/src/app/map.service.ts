import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import L from 'leaflet';

@Injectable({
  providedIn: 'root'
})

/**
 * Represents the service class for the interactible map initialization, configuration and controls.
 */
export class MapService {
  private mapboxUrls = {
      'light': `https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/{z}/{x}/{y}?access_token=${ environment.mapboxToken }`,
      'dark':  `https://api.mapbox.com/styles/v1/${ environment.mapboxUsername }/cm4ubpdkk00aa01qpgd9ahtfi/tiles/{z}/{x}/{y}?access_token=${ environment.mapboxToken }`
    };
    private map: any;
    private isDarkMode: boolean = false;

  constructor() {
    // i'd rather work using light mode, will uncomment when finished
    //this.isDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  /**
   * Initializes the map centered on Montreal, Canada.
   */
  initMap(): void {
    const swPoint = new L.LatLng(45.3, -73.17),
          nePoint = new L.LatLng(45.8, -74.27),
          bounds = new L.LatLngBounds(swPoint, nePoint);

    this.map = L.map('map', {
      center: [45.5, -73.57],
      maxBounds: bounds,
      zoom: 12
    });

    // For OpenStreetMap-sourced tiles, comment if using another source
    // const osmTiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   maxZoom: 19,
    //   minZoom: 12,
    //   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    // });
    
    // osmTiles.addTo(this.map);
    
    // For MapBox-sourced tiles, comment if using another source because of pricing
    const mapboxTiles = L.tileLayer(this.isDarkMode? this.mapboxUrls.dark : this.mapboxUrls.light, {
      maxZoom: 19,
      minZoom: 12,
      attribution: '&copy; <a href="https://www.mapbox.com/">MapBox</a>',
      tileSize: 512,
      zoomOffset: -1
    });
    
    mapboxTiles.addTo(this.map);
  }
}
