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
  private isDarkMode = false;

  constructor() { }

  getIsDarkMode(): boolean {
    return this.isDarkMode;
  }

  setIsDarkMode(isDarkMode: boolean): void {
    this.isDarkMode = isDarkMode;
  }

  /**
   * Checks if the user's browser is using the dark theme.
   * @returns true if the browser uses a dark theme
   */
  isUsingDarkTheme(): boolean {
    return false;
  }
}
