import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyVariationComponent } from './monthly-variation.component';

describe('MonthlyVariationComponent', () => {
  let component: MonthlyVariationComponent;
  let fixture: ComponentFixture<MonthlyVariationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthlyVariationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyVariationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
