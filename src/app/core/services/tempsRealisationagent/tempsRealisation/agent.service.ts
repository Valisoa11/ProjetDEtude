import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  [x: string]: any;

  constructor() { }

  getWeeksInMonth(month: number, year: number): string[] {
    const weeks: string[] = [];
    const date = new Date(year, month, 1);

    while (date.getMonth() === month) {
      const week = this.getWeekNumber(new Date(date));
      const label = `${week}`;
      if (!weeks.includes(label)) {
        weeks.push(label);
      }
      date.setDate(date.getDate() + 1);
    }

    // 👉 Ajouter un label vide à la fin pour créer un espace après le dernier point
    weeks.push("");

    return weeks;
  }

  private getWeekNumber(d: Date): number {
    const date = new Date(d.getTime());
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
    const week1 = new Date(date.getFullYear(), 0, 4);
    return (
      1 +
      Math.round(
        ((date.getTime() - week1.getTime()) / 86400000 - 
         3 + ((week1.getDay() + 6) % 7)) / 7
      )
    );
  }

  getTicketData(): {
    easy: number[];
    medium: number[];
    hard: number[];
  } {
    return {
      easy: [2.5, 3, 3.5, 3.2, 3.8],
      medium: [4.5, 5, 5.2, 5.1, 4.8],
      hard: [6, 7, 7.5, 6.8, 7.2],
    };
  }
}
