import { TestBed } from '@angular/core/testing';

import { TempsGlobService } from './temps-glob.service';

describe('TempsGlobService', () => {
  let service: TempsGlobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempsGlobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
