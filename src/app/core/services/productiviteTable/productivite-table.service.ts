import { Injectable } from '@angular/core';
export interface TicketMois {
  mois: string;
  facile: number;
  moyen: number;
  difficile: number;
  total: number;
}
@Injectable({
  providedIn: 'root'
})
export class ProductiviteTableService {

  constructor() { }
  getTicketParMois(): TicketMois[] {
    const mois = this.getMoisSuivants();

    return mois.map((m, i) => ({
      mois: m,
      facile: 10 + i,
      moyen: 5 + i,
      difficile: 2 + i,
      total: 10 + 5 + 2 + i * 3,
    }));
  }

  private getMoisSuivants(): string[] {
    const nomsMois = [
      'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
      'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];
    const now = new Date();
    const currentMonth = now.getMonth(); // 0-indexé
    const start = (currentMonth + 1) % 12;

    return Array.from({ length: 12 }, (_, i) => nomsMois[(start + i) % 12]);
  }
}

