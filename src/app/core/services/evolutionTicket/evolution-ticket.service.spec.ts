import { TestBed } from '@angular/core/testing';

import { EvolutionTicketService } from './evolution-ticket.service';

describe('EvolutionTicketService', () => {
  let service: EvolutionTicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvolutionTicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
