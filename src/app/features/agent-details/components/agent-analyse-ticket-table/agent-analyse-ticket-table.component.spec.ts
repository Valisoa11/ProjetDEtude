import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentAnalyseTicketTableComponent } from './agent-analyse-ticket-table.component';

describe('AgentAnalyseTicketTableComponent', () => {
  let component: AgentAnalyseTicketTableComponent;
  let fixture: ComponentFixture<AgentAnalyseTicketTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentAnalyseTicketTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentAnalyseTicketTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
