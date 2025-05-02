import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Agent, AgentDetailService } from '../../../../core/services/agentDetail/agent-detail.service';

import { TimeAnalysisComponent } from "../../components/time-analysis/time-analysis.component";
import { RealisationRateComponent } from "../../components/realisation-rate/realisation-rate.component";
import { AgentAnalyseTicketTableComponent } from "../../components/agent-analyse-ticket-table/agent-analyse-ticket-table.component";
import { AgentInfoComponent } from "../../components/agent-info/agent-info.component";
import { FilterComponent } from "../../../../core/components/filter/filter.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agent-details-page',
  imports: [
    TimeAnalysisComponent,
    RealisationRateComponent,
    AgentAnalyseTicketTableComponent,
    AgentInfoComponent,
    FilterComponent,
    CommonModule
  ],
  templateUrl: './agent-details-page.component.html',
  styleUrls: ['./agent-details-page.component.scss']
})
export class AgentDetailsPageComponent {

  agent$!: Observable<Agent | undefined>; // Type correct

  constructor(
    private agentService: AgentDetailService,
    private route: ActivatedRoute,
    private router: Router // ✅ Injection du Router pour la navigation
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.agent$ = this.agentService.getAgent(id);
  }

  goBack(): void {
    this.router.navigate(['/agents']); // ✅ Utilisation correcte de Router
  }
}
