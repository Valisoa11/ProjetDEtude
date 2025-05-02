import { TestBed } from '@angular/core/testing';

import { TauxRealisationService } from './taux-realisation.service';

describe('TauxRealisationService', () => {
  let service: TauxRealisationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TauxRealisationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
