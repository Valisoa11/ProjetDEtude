
import { Component, OnInit } from '@angular/core';
import { TicketsService } from '../../../../core/services/tickets/tickets.service';
import { CommonModule } from '@angular/common';
interface Ticket {
  agent: string;
  ticketsFermes: number;
  ticketsOuverts: number;
  ticketsEnCours: number;
  totalTickets: number;
}


@Component({
  selector: 'app-ticket-stats-by-agent',
  imports: [CommonModule],
  templateUrl: './ticket-stats-by-agent.component.html',
  styleUrl: './ticket-stats-by-agent.component.scss'
})
export class TicketStatsByAgentComponent implements OnInit{
  tickets: Ticket[] = [];

  constructor(private ticketService: TicketsService) {}

  ngOnInit(): void {
    this.ticketService.getTicketsData().subscribe(data => {
      this.tickets = data;
    });
  }

}
