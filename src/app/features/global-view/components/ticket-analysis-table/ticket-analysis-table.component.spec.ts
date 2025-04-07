import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketAnalysisTableComponent } from './ticket-analysis-table.component';

describe('TicketAnalysisTableComponent', () => {
  let component: TicketAnalysisTableComponent;
  let fixture: ComponentFixture<TicketAnalysisTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketAnalysisTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketAnalysisTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
