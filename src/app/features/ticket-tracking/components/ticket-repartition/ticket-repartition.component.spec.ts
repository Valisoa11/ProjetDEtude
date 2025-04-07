import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketRepartitionComponent } from './ticket-repartition.component';

describe('TicketRepartitionComponent', () => {
  let component: TicketRepartitionComponent;
  let fixture: ComponentFixture<TicketRepartitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketRepartitionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketRepartitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
