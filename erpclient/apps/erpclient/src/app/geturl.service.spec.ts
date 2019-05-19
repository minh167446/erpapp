import { TestBed } from '@angular/core/testing';

import { GeturlService } from './geturl.service';

describe('GeturlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeturlService = TestBed.get(GeturlService);
    expect(service).toBeTruthy();
  });
});
