import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductiviteAgentService {

  constructor() { }
  getScatterData(): Observable<{
    faciles: { x: number; y: number }[];
    moyens: { x: number; y: number }[];
    difficiles: { x: number; y: number }[];
  }> {
    return of({
      faciles: [
        { x: 5, y: 2 },
        { x: 7, y: 3 },
        { x: 5, y: 1 },
        { x: 10, y: 6 },
        { x: 20, y: 3 },
        { x: 6, y: 2 },
        { x: 4, y: 4 },
        { x: 11, y: 7 },
        { x: 9, y: 8 },
        { x: 13, y: 3 },
        { x: 35, y: 2 },
        { x: 4, y: 3 },
        { x: 5, y: 1 },
        { x: 8, y: 6 },
        { x: 22, y: 3 },
        { x: 9, y: 2 },
        { x: 6, y: 4 },
        { x: 25, y: 7 },
        { x: 30, y: 8 },
        { x: 15, y: 3 },
      ],
      moyens: [
        { x: 10, y: 4 },
        { x: 15, y: 5 },
        { x: 5, y: 2 },
        { x: 7, y: 3 },
        { x: 5, y: 1 },
        { x: 10, y: 6 },
        { x: 20, y: 3 },
        { x: 6, y: 2 },
        { x: 4, y: 4 },
        { x: 11, y: 7 },
        { x: 9, y: 8 },
        { x: 13, y: 3 },
      ],
      difficiles: [
        { x: 20, y: 6 },
        { x: 25, y: 7 },
        { x: 5, y: 2 },
        { x: 7, y: 3 },
        { x: 5, y: 1 },
        { x: 10, y: 6 },
        { x: 20, y: 3 },
        { x: 6, y: 2 },
        { x: 4, y: 4 },
        { x: 11, y: 7 },
        { x: 9, y: 8 },
        { x: 13, y: 3 },
      ]
    });
  }
}
