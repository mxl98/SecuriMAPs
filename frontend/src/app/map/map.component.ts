import { Component } from '@angular/core';
import L from 'leaflet';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent {
  private map: any;

  private initMap(): void {
    this.map = L.map('map', {
      center: [45.5, -73.57],
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
    const mapboxTiles = L.tileLayer(`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${ environment.mapboxToken }`, {
      maxZoom: 19,
      minZoom: 12,
      attribution: '&copy; <a href="https://www.mapbox.com/">MapBox</a>',
      tileSize: 512,
      zoomOffset: -1
    });

    mapboxTiles.addTo(this.map);
  }

  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();
  }
}
