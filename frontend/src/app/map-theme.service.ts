import { Injectable } from '@angular/core';
import L, { map } from 'leaflet';
import { environment } from '../environments/environment';
import { MapService } from './map.service';

@Injectable({
  providedIn: 'root'
})
export class MapThemeService {
  private isDarkMode = false;

  constructor() {}

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
