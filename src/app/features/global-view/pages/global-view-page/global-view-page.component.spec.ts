import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalViewPageComponent } from './global-view-page.component';

describe('GlobalViewPageComponent', () => {
  let component: GlobalViewPageComponent;
  let fixture: ComponentFixture<GlobalViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlobalViewPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
