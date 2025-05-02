import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
export interface TicketData {
  done: number;
  total: number;
}

export interface TicketStats {
  easy: TicketData;
  medium: TicketData;
  hard: TicketData;
}
@Injectable({
  providedIn: 'root'
})
export class TauxRealisationService {

 
  
  constructor() {}

  // Simule un appel API (à remplacer par HttpClient)
  getTicketStats(): Observable<TicketStats> {
    const stats: TicketStats = {
      easy: { done: 20, total: 40 },
      medium: { done: 15, total: 30 },
      hard: { done: 10, total: 25 }
    };
    return of(stats);
  }
}
