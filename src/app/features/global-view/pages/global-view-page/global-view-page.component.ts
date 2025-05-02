import { Component } from '@angular/core';
import { PageGrapheComponent } from "../../components/graphes/pages-graphes/page-graphe/page-graphe.component";
import { TicketAnalysisTableComponent } from "../../components/ticket-analysis-table/ticket-analysis-table.component";
import { BestAgentComponent } from "../../components/best-agent/best-agent.component";
import { TicketSummaryComponent } from "../../components/ticket-summary/ticket-summary.component";
import { FilterComponent } from "../../../../core/components/filter/filter.component";

@Component({
  selector: 'app-global-view-page',
  imports: [PageGrapheComponent, TicketAnalysisTableComponent, BestAgentComponent, TicketSummaryComponent, FilterComponent],
  templateUrl: './global-view-page.component.html',
  styleUrl: './global-view-page.component.scss'
})
export class GlobalViewPageComponent {

}
