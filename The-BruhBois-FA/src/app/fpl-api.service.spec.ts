import { TestBed } from '@angular/core/testing';

import { FplApiService } from './fpl-api.service';

describe('FplApiService', () => {
  let service: FplApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FplApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
