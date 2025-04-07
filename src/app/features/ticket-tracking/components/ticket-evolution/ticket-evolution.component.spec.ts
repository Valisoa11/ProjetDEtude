import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketEvolutionComponent } from './ticket-evolution.component';

describe('TicketEvolutionComponent', () => {
  let component: TicketEvolutionComponent;
  let fixture: ComponentFixture<TicketEvolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketEvolutionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketEvolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
