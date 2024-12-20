import { Component } from '@angular/core';
import L from 'leaflet';
import { environment } from '../../environments/environment';
import { MapService } from '../map.service';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})

/**
 * Represents the interactible map section.
 */
export class MapComponent {
  private _mapService: MapService;

  constructor(mapService: MapService) {
    this._mapService = mapService;
  }

  ngAfterViewInit(): void {
    this._mapService.initMap();
  }
}
