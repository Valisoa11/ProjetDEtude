import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealisationRateComponent } from './realisation-rate.component';

describe('RealisationRateComponent', () => {
  let component: RealisationRateComponent;
  let fixture: ComponentFixture<RealisationRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealisationRateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealisationRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
