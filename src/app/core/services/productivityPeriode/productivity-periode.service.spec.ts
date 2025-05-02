import { TestBed } from '@angular/core/testing';

import { ProductivityPeriodeService } from './productivity-periode.service';

describe('ProductivityPeriodeService', () => {
  let service: ProductivityPeriodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductivityPeriodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
