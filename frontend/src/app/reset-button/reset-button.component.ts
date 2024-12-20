import { Component } from '@angular/core';
import { MapService } from '../map.service';

@Component({
  selector: 'app-reset-button',
  standalone: true,
  imports: [],
  templateUrl: './reset-button.component.html',
  styleUrl: './reset-button.component.scss'
})

/**
 * Represents the map reset control button
 */
export class ResetButtonComponent {
  private _mapService: MapService;

  constructor(mapService: MapService) {
    this._mapService = mapService;
  }

  resetMap(): void {
    this._mapService.resetMap();
  }
}
