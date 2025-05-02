import { Component } from '@angular/core';
import { TicketRepartitionComponent } from "../../components/ticket-repartition/ticket-repartition.component";
import { TicketEvolutionComponent } from "../../components/ticket-evolution/ticket-evolution.component";
import { MonthlyVariationComponent } from "../../components/monthly-variation/monthly-variation.component";
import { TicketStatsByAgentComponent } from "../../components/ticket-stats-by-agent/ticket-stats-by-agent.component";
import { FilterComponent } from "../../../../core/components/filter/filter.component";

@Component({
  selector: 'app-ticket-tracking-page',
  imports: [TicketEvolutionComponent, MonthlyVariationComponent, TicketStatsByAgentComponent, TicketRepartitionComponent, FilterComponent],
  templateUrl: './ticket-tracking-page.component.html',
  styleUrl: './ticket-tracking-page.component.scss'
})
export class TicketTrackingPageComponent {

}
