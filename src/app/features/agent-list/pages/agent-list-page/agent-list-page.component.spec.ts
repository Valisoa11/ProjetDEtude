import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentListPageComponent } from './agent-list-page.component';

describe('AgentListPageComponent', () => {
  let component: AgentListPageComponent;
  let fixture: ComponentFixture<AgentListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentListPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
