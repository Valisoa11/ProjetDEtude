import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGrapheComponent } from './page-graphe.component';

describe('PageGrapheComponent', () => {
  let component: PageGrapheComponent;
  let fixture: ComponentFixture<PageGrapheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageGrapheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageGrapheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
