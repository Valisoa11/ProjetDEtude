import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentComparaisonComponent } from './agent-comparaison.component';

describe('AgentComparaisonComponent', () => {
  let component: AgentComparaisonComponent;
  let fixture: ComponentFixture<AgentComparaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentComparaisonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentComparaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
