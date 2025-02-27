import { TestBed } from '@angular/core/testing';

import { MapService } from './map.service';
import { provideHttpClient } from '@angular/common/http';
import L from 'leaflet';

describe('MapService', () => {
  let service: MapService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient()
      ]
    });
    service = TestBed.inject(MapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have attribution', () => {
    let tileLayer = service.generateMapTiles();
    expect(tileLayer.options.attribution).toEqual('&copy; <a href="https://www.mapbox.com/">MapBox</a>');
  });
});
