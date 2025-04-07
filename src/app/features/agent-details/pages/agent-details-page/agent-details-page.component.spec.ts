import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentDetailsPageComponent } from './agent-details-page.component';

describe('AgentDetailsPageComponent', () => {
  let component: AgentDetailsPageComponent;
  let fixture: ComponentFixture<AgentDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentDetailsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
