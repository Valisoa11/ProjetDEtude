import { Injectable } from '@angular/core';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RepartionTicketsService {

  getChartData() {
    const totalTickets = 300;
    const agents = [
      { name: 'Alice', tickets: 15 },
      { name: 'Bob', tickets: 20 },
      { name: 'Charlie', tickets: 15 },
      { name: 'Alice', tickets: 15 },
      { name: 'Bob', tickets: 20 },
      { name: 'Charlie', tickets: 15 },
      { name: 'Alice', tickets: 15 },
      { name: 'Bob', tickets: 20 },
      { name: 'Charlie', tickets: 15 },
      { name: 'Alice', tickets: 15 },
      { name: 'Bob', tickets: 20 },
      { name: 'Charlie', tickets: 15 },
      { name: 'Alice', tickets: 15 },
      { name: 'Bob', tickets: 20 },
      { name: 'Charlie', tickets: 15 },
    ];

    return of({ total: totalTickets, agents });
  }
}
