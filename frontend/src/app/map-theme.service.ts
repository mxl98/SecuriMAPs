import { Injectable } from '@angular/core';
import L from 'leaflet';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MapThemeService {
  private mapboxUrls = {
        'light': `https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/{z}/{x}/{y}?access_token=${ environment.mapboxToken }`,
        'dark':  `https://api.mapbox.com/styles/v1/${ environment.mapboxUsername }/cm4ubpdkk00aa01qpgd9ahtfi/tiles/{z}/{x}/{y}?access_token=${ environment.mapboxToken }`
      };

  constructor() { }

  /**
   * Applies the corresponding urlTemplate (light or dark) to the map TileLayer based on the selected mode (dark or not).
   * @param isDarkMode true if dark mode is on, false otherwise
   * @returns The TileLayer object of the corresponding urlTemplate.
   */
  setTilesTheme(isDarkMode: boolean): L.TileLayer {
    const mapboxTiles = L.tileLayer(isDarkMode? this.mapboxUrls.dark : this.mapboxUrls.light, {
          maxZoom: 19,
          minZoom: 12,
          attribution: '&copy; <a href="https://www.mapbox.com/">MapBox</a>',
          tileSize: 512,
          zoomOffset: -1
        });
      return mapboxTiles;
  }
}
