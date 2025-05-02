import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class TempsGlobService {

  constructor() { }
  getTimesData() {
    // données fictives, remplace par ton backend plus tard
    return of({
      agents: ['Alice', 'Bob', 'Charlie', 'Alice', 'Bob', 'Charlie', 'Diana','Alice', 'Bob', 'Charlie', 'Alice', 'Bob', 'Charlie', 'Diana'],
      ticketFacile: [1, 6, 2, 7 , 6, 3, 7, 3, 4, 2, 1, 5, 4 ,6,7, 2,2, 7, 3, 5,2, 6, 3, 5, 3,1,4,6],
      ticketMoyen: [7, 2,2, 7, 3, 5,2, 6, 3, 5, 3,1,4,6, 7, 2,2, 7, 3, 5,2, 6, 3, 5, 3,1,4,6],
      ticketDiff: [8, 1, 7, 2,2, 7, 3, 5,2, 6, 3, 5,4,6, 7, 2,2, 7, 3, 5,2, 6, 3, 5, 3,1,4,6],
    });
  }
}
