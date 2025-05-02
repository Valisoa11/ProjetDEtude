import { TestBed } from '@angular/core/testing';

import { TempsTraitAnalysService } from './temps-trait-analys.service';

describe('TempsTraitAnalysService', () => {
  let service: TempsTraitAnalysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempsTraitAnalysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
