import { TestBed } from '@angular/core/testing';

import { GeoJSONService } from './geo-json.service';
import { provideHttpClient } from '@angular/common/http';
import L from 'leaflet';

describe('GeoJSONService', () => {
  let service: GeoJSONService;
  let testFiles = {
    'LatLng':'assets/testing/geo-json-test.geojson'
  };
  let expectedLatLngArray: L.LatLng[] = [
    new L.LatLng(45.455504503909204, -73.86161590004312),
    new L.LatLng(45.486871369019063, -73.878548599748342)
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient()
      ]
    });
    service = TestBed.inject(GeoJSONService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getLatLngFromCoordinates should return value from file', async () => {
    let resultLatLngArray: L.LatLng[] = await service.getLatLngFromCoordinates(testFiles.LatLng);
    expect(resultLatLngArray).toEqual(expectedLatLngArray);
  })
});
