import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductivityPeriodsComponent } from './productivity-periods.component';

describe('ProductivityPeriodsComponent', () => {
  let component: ProductivityPeriodsComponent;
  let fixture: ComponentFixture<ProductivityPeriodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductivityPeriodsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductivityPeriodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
