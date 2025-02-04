import { TestBed } from '@angular/core/testing';

import { CollisionModeService } from './collision-mode.service';

describe('CollisionModeService', () => {
  let service: CollisionModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollisionModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
