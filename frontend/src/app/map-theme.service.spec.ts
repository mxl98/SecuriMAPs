import { TestBed } from '@angular/core/testing';

import { MapThemeService } from './map-theme.service';

describe('MapThemeService', () => {
  let service: MapThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
