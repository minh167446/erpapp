import { TestBed } from '@angular/core/testing';

import { GetIdEmpService } from './get-id-emp.service';

describe('GetIdEmpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetIdEmpService = TestBed.get(GetIdEmpService);
    expect(service).toBeTruthy();
  });
});
