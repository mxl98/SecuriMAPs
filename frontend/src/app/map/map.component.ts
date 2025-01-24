import { Component } from '@angular/core';
import { MapService } from '../map.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [
    NavbarComponent,
  ],
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
