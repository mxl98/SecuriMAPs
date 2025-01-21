import { Component } from '@angular/core';
import { MapThemeService } from '../map-theme.service';

@Component({
  selector: 'app-theme-button',
  standalone: true,
  imports: [],
  templateUrl: './theme-button.component.html',
  styleUrl: './theme-button.component.scss'
})
export class ThemeButtonComponent {
  private isDarkMode = false;
  private _mapThemeService: MapThemeService;

  constructor(mapThemeService: MapThemeService) {
    this._mapThemeService = mapThemeService;
  }

  /**
   * When it is called by the toggle event,
   * updates the map theme based on the button value.
   */
  updateMapTheme(): void {
    this._mapThemeService.setTilesTheme(this.isDarkMode);
  }
}
