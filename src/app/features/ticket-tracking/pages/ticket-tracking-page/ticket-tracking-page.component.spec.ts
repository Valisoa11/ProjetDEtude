import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketTrackingPageComponent } from './ticket-tracking-page.component';

describe('TicketTrackingPageComponent', () => {
  let component: TicketTrackingPageComponent;
  let fixture: ComponentFixture<TicketTrackingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketTrackingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketTrackingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
