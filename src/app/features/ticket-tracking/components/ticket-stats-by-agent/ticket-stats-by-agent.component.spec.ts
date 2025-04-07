import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketStatsByAgentComponent } from './ticket-stats-by-agent.component';

describe('TicketStatsByAgentComponent', () => {
  let component: TicketStatsByAgentComponent;
  let fixture: ComponentFixture<TicketStatsByAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketStatsByAgentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketStatsByAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
