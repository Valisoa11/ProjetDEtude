import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class PerfGlobService {

constructor() { }
  getTicketsData() {
    // données fictives, remplace par ton backend plus tard
    return of({
      agents: ['Bob', 'Charlie', 'Diana','Bob', 'Charlie', 'Diana','Bob', 'Charlie', 'Diana','Alice', 'Bob', 'Charlie', 'Diana','Bob', 'Charlie', 'Diana','Bob', 'Charlie', 'Diana','Bob', 'Charlie', 'Diana','Alice', 'Bob', 'Charlie', 'Diana'],
      currentMonth: [12, 19, 3, 5,12, 19, 3, 5,12, 19, 3, 5, 12, 19, 3, 5,12, 19, 3, 5,12, 19, 3, 5],
      lastMonth: [80, 11, 7, 2,12, 19, 3, 5,12, 19, 3, 5, 12, 19, 3, 5,12, 19, 3, 5,12, 19, 3, 5]
    });
  }
}


