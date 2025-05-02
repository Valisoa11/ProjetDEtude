import { Component } from '@angular/core';
import { AgentCardComponent } from "../../components/agent-card/agent-card.component";
import { FilterComponent } from "../../../../core/components/filter/filter.component";
import { TriageComponent } from "../../../../core/components/triage/triage.component";
import { AgentKey } from '../../../../core/models/agent.model';

@Component({
  selector: 'app-agent-list-page',
  imports: [AgentCardComponent, FilterComponent, TriageComponent],
  templateUrl: './agent-list-page.component.html',
  styleUrl: './agent-list-page.component.scss'
})
export class AgentListPageComponent {
  selectedSort: AgentKey = 'id'; // valeur par défaut
  total: number = 0;
  updateSort(newSort: AgentKey) {
    this.selectedSort = newSort;
  }
  
  onTotalAgent(count: number) {
    this.total = count;
  }

}
