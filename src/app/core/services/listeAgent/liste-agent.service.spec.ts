import { TestBed } from '@angular/core/testing';

import { ListeAgentService } from './liste-agent.service';

describe('ListeAgentService', () => {
  let service: ListeAgentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeAgentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
