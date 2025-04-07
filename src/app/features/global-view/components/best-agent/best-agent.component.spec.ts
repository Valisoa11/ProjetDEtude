import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestAgentComponent } from './best-agent.component';

describe('BestAgentComponent', () => {
  let component: BestAgentComponent;
  let fixture: ComponentFixture<BestAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestAgentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
