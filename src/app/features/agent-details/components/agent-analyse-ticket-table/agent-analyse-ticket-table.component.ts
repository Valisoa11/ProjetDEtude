import { Component, inject } from '@angular/core';
import { AnalysTableService, Ticket } from '../../../../core/services/analysTable/analys-table.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-agent-analyse-ticket-table',
  imports: [CommonModule],
  templateUrl: './agent-analyse-ticket-table.component.html',
  styleUrl: './agent-analyse-ticket-table.component.scss'
})
export class AgentAnalyseTicketTableComponent {
  private service = inject(AnalysTableService);
  tickets: Ticket[] = [];

  constructor() {
    this.tickets = this.service.getTickets();
  }

}
