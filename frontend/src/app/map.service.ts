import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import L, { LatLng } from 'leaflet';
import { MapThemeService } from './map-theme.service';
import { GeoJSONService } from './geo-json.service';
import 'leaflet.heat';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/**
 * Represents the service class for the interactible map initialization, configuration and controls.
 */
export class MapService {
  private _mapThemeService: MapThemeService;
  private _geoJsonService: GeoJSONService;
  private mapboxUrls = {
      'light': `https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/{z}/{x}/{y}?access_token=${ environment.mapboxToken }`,
      'dark':  `https://api.mapbox.com/styles/v1/${ environment.mapboxUsername }/cm4ubpdkk00aa01qpgd9ahtfi/tiles/{z}/{x}/{y}?access_token=${ environment.mapboxToken }`
    };
    private centerPoint = new L.LatLng(45.5, -73.57);
    private map: L.Map | undefined;
    private heatLayer: any;
    private isDarkMode: boolean = false;

  constructor(mapThemeService: MapThemeService, geoJsonService: GeoJSONService) {
    this._mapThemeService = mapThemeService;
    this._geoJsonService = geoJsonService;
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

    this.setHeatLayer();
    
    this._mapThemeService.isDarkMode$.subscribe((isDarkMode) => {
      if (!this.map) return;

      this.isDarkMode = isDarkMode;
      const newtiles = this.generateMapTiles();
      newtiles.addTo(this.map);
    });
  }

  /**
   * Generates the map TileLayer according to the active theme.
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
   * Gets the array of LatLng coordinates from the geojson service
   * @returns an array of points
   */
  async getHeatmapPoints(): Promise<L.LatLng[]> {
    return await this._geoJsonService.getLatLngFromCoordinates();
  }

  /**
   * Sets a value to the heatLayer variable
   */
  setHeatLayer(): void {
    let points: L.LatLng[] = [];
    this.getHeatmapPoints().then(results => {
      points = results;
      this.heatLayer = (L as any).heatLayer(points, {
        radius: 15,
        blur: 15,
        maxZoom: 19,
        gradient: {0.4: 'blue', 0.8: 'yellow', 1: 'red'},
      });
      this.addHeatLayer();
    });
  }

  /**
   * Adds the heatLayer to the map
   * @returns 
   */
  addHeatLayer(): void {
    if (!this.map) return;

    this.heatLayer.addTo(this.map);
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
