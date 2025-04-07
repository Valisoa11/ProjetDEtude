import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeAnalysisComponent } from './time-analysis.component';

describe('TimeAnalysisComponent', () => {
  let component: TimeAnalysisComponent;
  let fixture: ComponentFixture<TimeAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeAnalysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
