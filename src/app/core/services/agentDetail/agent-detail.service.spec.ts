import { TestBed } from '@angular/core/testing';

import { AgentDetailService } from './agent-detail.service';

describe('AgentDetailService', () => {
  let service: AgentDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgentDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
