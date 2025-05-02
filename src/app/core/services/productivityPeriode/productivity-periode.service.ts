import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductivityPeriodeService {

  constructor() { }

  getStackedTicketData(): Observable<{
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string;
    }[];
  }> {
    const labels = this.getDynamicShortMonths(12);

    const datasets = [
      {
        label: 'Ticket facile',
        data: [20, 30, 25, 40, 35, 28, 33, 38, 31, 29, 34, 36],
        backgroundColor: '#6BCB77'
      },
      {
        label: 'Ticket moyen',
        data: [15, 22, 18, 26, 23, 20, 19, 25, 21, 24, 22, 27],
        backgroundColor: '#03628F'
      },
      {
        label: 'Ticket difficile',
        data: [5, 8, 6, 9, 7, 6, 8, 7, 6, 5, 9, 8],
        backgroundColor: '#FF6B6B'
      }
    ];

    return of({ labels, datasets });
  }

  private getDynamicShortMonths(count: number): string[] {
    const allShortMonths = ['jan', 'fév', 'mar', 'avr', 'mai', 'jun', 'jul', 'aoû', 'sep', 'oct', 'nov', 'déc'];
    const currentMonth = new Date().getMonth(); // 0 pour janvier, 11 pour décembre
    const labels: string[] = [];

    for (let i = 1; i <= count; i++) {
      const monthIndex = (currentMonth + i) % 12;
      labels.push(allShortMonths[monthIndex]);
    }

    return labels;
  }
}
