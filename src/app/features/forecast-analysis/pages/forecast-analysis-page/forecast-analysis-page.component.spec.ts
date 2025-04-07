import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastAnalysisPageComponent } from './forecast-analysis-page.component';

describe('ForecastAnalysisPageComponent', () => {
  let component: ForecastAnalysisPageComponent;
  let fixture: ComponentFixture<ForecastAnalysisPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForecastAnalysisPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForecastAnalysisPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
