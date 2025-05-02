import { Component, inject } from '@angular/core';
import { AgentData, TempsTraitAnalysService } from '../../../../core/services/tempsTraitAnalys/temps-trait-analys.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-ticket-analysis-table',
  imports: [CommonModule],
  templateUrl: './ticket-analysis-table.component.html',
  styleUrl: './ticket-analysis-table.component.scss'
})
export class TicketAnalysisTableComponent {
  private tempsTraitService = inject(TempsTraitAnalysService);
  agents: AgentData[] = [];

  constructor() {
    this.tempsTraitService.getAgents().subscribe(data => {
      this.agents = data;
    });
  }

}
