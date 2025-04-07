import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeResolutionGraphComponent } from './time-resolution-graph.component';

describe('TimeResolutionGraphComponent', () => {
  let component: TimeResolutionGraphComponent;
  let fixture: ComponentFixture<TimeResolutionGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeResolutionGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeResolutionGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
