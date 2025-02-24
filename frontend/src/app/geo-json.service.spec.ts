import { TestBed } from '@angular/core/testing';

import { GeoJSONService } from './geo-json.service';
import { provideHttpClient } from '@angular/common/http';

describe('GeoJSONService', () => {
  let service: GeoJSONService;

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
});
