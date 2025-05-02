import { TestBed } from '@angular/core/testing';

import { MonthlyVariationService } from './monthly-variation.service';

describe('MonthlyVariationService', () => {
  let service: MonthlyVariationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonthlyVariationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
