import { TestBed } from '@angular/core/testing';

import { ProductiviteAgentService } from './productivite-agent.service';

describe('ProductiviteAgentService', () => {
  let service: ProductiviteAgentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductiviteAgentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
