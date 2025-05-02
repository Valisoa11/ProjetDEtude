import { Injectable } from '@angular/core';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClassementService {

  constructor() { }
  getCards() {
    return of([
      { color: '#005781', agent: 'Agent A', ticket: 'Ticket 1' },
      { color: '#505396', agent: 'Agent B', ticket: 'Ticket 2' },
      { color: '#336FB4', agent: 'Agent C', ticket: 'Ticket 3' },
      { color: '#8174BC', agent: 'Agent D', ticket: 'Ticket 4' },
    ]);
  }
}