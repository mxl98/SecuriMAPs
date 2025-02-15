import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import L from 'leaflet';
import { MapThemeService } from './map-theme.service';

@Injectable({
  providedIn: 'root'
})

/**
 * Represents the service class for the interactible map initialization, configuration and controls.
 */
export class MapService {
  private _mapThemeService: MapThemeService;
  private mapboxUrls = {
      'light': `https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/{z}/{x}/{y}?access_token=${ environment.mapboxToken }`,
      'dark':  `https://api.mapbox.com/styles/v1/${ environment.mapboxUsername }/cm4ubpdkk00aa01qpgd9ahtfi/tiles/{z}/{x}/{y}?access_token=${ environment.mapboxToken }`
    };
    private centerPoint = new L.LatLng(45.5, -73.57);
    private map: L.Map | undefined;
    private isDarkMode: boolean = false;

    private dataUrls = {
      'temp':'data/geojson/collisions_routieres.geojson'
    }

  constructor(mapThemeService: MapThemeService) {
    this._mapThemeService = mapThemeService;
    // i'd rather work using light mode, will uncomment when finished
    //this.isDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  getMap(): L.Map | undefined {
    return this.map;
  }

  setMap(map: L.Map): void {
    this.map = map;
  }

  /**
   * Initializes the map centered on Montreal, Canada.
   * The map is bounded to include Montreal and its direct surroundings,
   * and uses the correct style based on the browser theme.
   */
  initMap(): void {
    const swPoint = new L.LatLng(45.3, -73.17),
          nePoint = new L.LatLng(45.8, -74.27),
          bounds = new L.LatLngBounds(swPoint, nePoint);

    this.map = L.map('map', {
      center: this.centerPoint,
      maxBounds: bounds,
      zoomControl: false,
      zoom: 12
    });

    new L.Control.Zoom({ position: 'topright' }).addTo(this.map);

    // For OpenStreetMap-sourced tiles, comment if using another source
    // const osmTiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //   maxZoom: 19,
    //   minZoom: 12,
    //   attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    // });
    
    // osmTiles.addTo(this.map);
    
    // For MapBox-sourced tiles, comment if using another source because of pricing
    const mapboxTiles = this.generateMapTiles();

    mapboxTiles.addTo(this.map);
    
    this._mapThemeService.isDarkMode$.subscribe((isDarkMode) => {
      if (!this.map) return;

      this.isDarkMode = isDarkMode;
      const newtiles = this.generateMapTiles();
      newtiles.addTo(this.map);
    });
  }

  /**
   * Updates the map TileLayer according to the active theme.
   * @param map the map to update
   * @returns the updated map
   */
  generateMapTiles(): L.TileLayer {
    const mapboxTiles = L.tileLayer(this.isDarkMode? this.mapboxUrls.dark : this.mapboxUrls.light, {
      maxZoom: 19,
      minZoom: 12,
      attribution: '&copy; <a href="https://www.mapbox.com/">MapBox</a>',
      tileSize: 512,
      zoomOffset: -1
    });
    
    return mapboxTiles;
  }

  /**
   * Resets the map view to the initial position
   */
  resetMap(): void {
    this.map?.setView(this.centerPoint, 12, {
      animate: true
    });
  }
}
