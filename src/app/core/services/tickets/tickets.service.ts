import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
interface Ticket {
  agent: string;
  ticketsFermes: number;
  ticketsOuverts: number;
  ticketsEnCours: number;
  totalTickets: number;
}
@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor() { }
  getTicketsData(): Observable<Ticket[]> {
    const tickets: Ticket[] = [
      { agent: 'Agent 1', ticketsFermes: 10, ticketsOuverts: 5, ticketsEnCours: 2, totalTickets: 17 },
      { agent: 'Agent 2', ticketsFermes: 8, ticketsOuverts: 3, ticketsEnCours: 1, totalTickets: 12 },
      { agent: 'Agent 1', ticketsFermes: 10, ticketsOuverts: 5, ticketsEnCours: 2, totalTickets: 17 },
      { agent: 'Agent 2', ticketsFermes: 8, ticketsOuverts: 3, ticketsEnCours: 1, totalTickets: 12 },
      { agent: 'Agent 3', ticketsFermes: 15, ticketsOuverts: 7, ticketsEnCours: 5, totalTickets: 27 },
      { agent: 'Agent 1', ticketsFermes: 10, ticketsOuverts: 5, ticketsEnCours: 2, totalTickets: 17 },
      { agent: 'Agent 2', ticketsFermes: 8, ticketsOuverts: 3, ticketsEnCours: 1, totalTickets: 12 },
      { agent: 'Agent 3', ticketsFermes: 15, ticketsOuverts: 7, ticketsEnCours: 5, totalTickets: 27 },
      { agent: 'Agent 1', ticketsFermes: 10, ticketsOuverts: 5, ticketsEnCours: 2, totalTickets: 17 },
      { agent: 'Agent 2', ticketsFermes: 8, ticketsOuverts: 3, ticketsEnCours: 1, totalTickets: 12 },
      { agent: 'Agent 3', ticketsFermes: 15, ticketsOuverts: 7, ticketsEnCours: 5, totalTickets: 27 },
      { agent: 'Agent 1', ticketsFermes: 10, ticketsOuverts: 5, ticketsEnCours: 2, totalTickets: 17 },
      { agent: 'Agent 2', ticketsFermes: 8, ticketsOuverts: 3, ticketsEnCours: 1, totalTickets: 12 },
      { agent: 'Agent 3', ticketsFermes: 15, ticketsOuverts: 7, ticketsEnCours: 5, totalTickets: 27 },
      { agent: 'Agent 3', ticketsFermes: 15, ticketsOuverts: 7, ticketsEnCours: 5, totalTickets: 27 },
      // Ajoutez plus d'exemples ici
    ];
    return of(tickets);
  }
}
