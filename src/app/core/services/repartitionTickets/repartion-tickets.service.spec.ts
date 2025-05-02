import { TestBed } from '@angular/core/testing';

import { RepartionTicketsService } from './repartion-tickets.service';

describe('RepartionTicketsService', () => {
  let service: RepartionTicketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepartionTicketsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
