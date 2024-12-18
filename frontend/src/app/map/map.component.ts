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
  private mapboxUrls = {
    'light': `https://api.mapbox.com/styles/v1/mapbox/streets-v12/tiles/{z}/{x}/{y}?access_token=${ environment.mapboxToken }`,
    'dark':  `https://api.mapbox.com/styles/v1/${ environment.mapboxUsername }/cm4ubpdkk00aa01qpgd9ahtfi/tiles/{z}/{x}/{y}?access_token=${ environment.mapboxToken }`
  };
  private darkMode: boolean = false;
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
    const mapboxTiles = L.tileLayer(this.darkMode? this.mapboxUrls.dark : this.mapboxUrls.light, {
      maxZoom: 19,
      minZoom: 12,
      attribution: '&copy; <a href="https://www.mapbox.com/">MapBox</a>',
      tileSize: 512,
      zoomOffset: -1
    });

    mapboxTiles.addTo(this.map);
  }

  constructor() {
    // i'd rather work using light mode, will uncomment when finished
    //this.darkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
