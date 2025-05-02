import { TestBed } from '@angular/core/testing';

import { AnalysTableService } from './analys-table.service';

describe('AnalysTableService', () => {
  let service: AnalysTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalysTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
