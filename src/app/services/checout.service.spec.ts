import { TestBed } from '@angular/core/testing';

import { ChecoutService } from './checout.service';

describe('ChecoutService', () => {
  let service: ChecoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChecoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
