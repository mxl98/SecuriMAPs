import { TestBed } from '@angular/core/testing';

import { ThemeButtonService } from './theme-button.service';

describe('ThemeButtonService', () => {
  let service: ThemeButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
