import { TestBed } from '@angular/core/testing';

import { ProductiviteTableService } from './productivite-table.service';

describe('ProductiviteTableService', () => {
  let service: ProductiviteTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductiviteTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
