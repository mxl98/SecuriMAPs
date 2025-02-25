import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import L from 'leaflet';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeoJSONService {
  private geoJSONUrls = {
    'collisions':'assets/data/geojson/collisions_routieres.geojson'
  }

  constructor(private http: HttpClient) { }

  async getLatLngFromCoordinates(fileUrl: string): Promise<L.LatLng[]> {
    let geoJson: L.LatLng[] = [];
    await fetch(fileUrl)
    .then(response => response.json())
    .then(data => {
      geoJson = this.extractCoordinates(data);
    });
    return geoJson;
  }

  /**
   * Reads the data and converts to LatLng[]
   * @param geoJson the geojson object obtained from reading the file
   * @returns an array of LatLng objects
   */
  private extractCoordinates(geoJson: any): L.LatLng[] {
    const latLngArray: L.LatLng[] = [];

    geoJson.features.forEach((feature: any) => {
      const type = feature.geometry?.type ?? '';
      if (type === 'Point') {
        const [lon, lat] = feature.geometry.coordinates;
        latLngArray.push(L.latLng(lat, lon));
      }
    });
    return latLngArray;
  }
}
