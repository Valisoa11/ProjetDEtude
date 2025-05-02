import { Injectable } from '@angular/core';
export interface Ticket {
  id: number;
  type: string;
  tempsMoyen: string;
  tempsReel: string;
}
@Injectable({
  providedIn: 'root'
})
export class AnalysTableService {

  constructor() { }
  getTickets(): Ticket[] {
    return [
      { id: 101, type: 'Facile', tempsMoyen: '15 min', tempsReel: '12 min' },
      { id: 102, type: 'Moyen', tempsMoyen: '30 min', tempsReel: '40 min' },
      { id: 103, type: 'Difficile', tempsMoyen: '1h', tempsReel: '1h15' },
      { id: 104, type: 'Facile', tempsMoyen: '10 min', tempsReel: '8 min' },
      { id: 101, type: 'Facile', tempsMoyen: '15 min', tempsReel: '12 min' },
      { id: 102, type: 'Moyen', tempsMoyen: '30 min', tempsReel: '40 min' },
      { id: 103, type: 'Difficile', tempsMoyen: '1h', tempsReel: '1h15' },
      { id: 104, type: 'Facile', tempsMoyen: '10 min', tempsReel: '8 min' },
      { id: 101, type: 'Facile', tempsMoyen: '15 min', tempsReel: '12 min' },
      { id: 102, type: 'Moyen', tempsMoyen: '30 min', tempsReel: '40 min' },
      { id: 103, type: 'Difficile', tempsMoyen: '1h', tempsReel: '1h15' },
      { id: 104, type: 'Facile', tempsMoyen: '10 min', tempsReel: '8 min' },
      { id: 101, type: 'Facile', tempsMoyen: '15 min', tempsReel: '12 min' },
      { id: 102, type: 'Moyen', tempsMoyen: '30 min', tempsReel: '40 min' },
      { id: 103, type: 'Difficile', tempsMoyen: '1h', tempsReel: '1h15' },
      { id: 104, type: 'Facile', tempsMoyen: '10 min', tempsReel: '8 min' },
      { id: 101, type: 'Facile', tempsMoyen: '15 min', tempsReel: '12 min' },
      { id: 102, type: 'Moyen', tempsMoyen: '30 min', tempsReel: '40 min' },
      { id: 103, type: 'Difficile', tempsMoyen: '1h', tempsReel: '1h15' },
      { id: 104, type: 'Facile', tempsMoyen: '10 min', tempsReel: '8 min' },
    ];
  }
}
