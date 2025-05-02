import { TestBed } from '@angular/core/testing';

import { PerfGlobService } from './perf-glob.service';

describe('PerfGlobService', () => {
  let service: PerfGlobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfGlobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
