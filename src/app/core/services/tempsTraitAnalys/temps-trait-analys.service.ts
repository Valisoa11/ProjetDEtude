import { Injectable } from '@angular/core';
import { of } from 'rxjs';
export interface AgentData {
  nom: string;
  faciles: { nb: number; points: number };
  moyens: { nb: number; points: number };
  difficiles: { nb: number; points: number };
  totalPoints: number;
}
@Injectable({
  providedIn: 'root'
})
export class TempsTraitAnalysService {

  constructor() { }
  getAgents() {
    const data: AgentData[] = [
      {
        nom: 'Alice',
        faciles: { nb: 10, points: 20 },
        moyens: { nb: 5, points: 25 },
        difficiles: { nb: 2, points: 20 },
        totalPoints: 65
      },
      {
        nom: 'Bob',
        faciles: { nb: 12, points: 24 },
        moyens: { nb: 3, points: 15 },
        difficiles: { nb: 1, points: 10 },
        totalPoints: 49
      },
      {
        nom: 'Alice',
        faciles: { nb: 10, points: 20 },
        moyens: { nb: 5, points: 25 },
        difficiles: { nb: 2, points: 20 },
        totalPoints: 65
      },
      {
        nom: 'Bob',
        faciles: { nb: 12, points: 24 },
        moyens: { nb: 3, points: 15 },
        difficiles: { nb: 1, points: 10 },
        totalPoints: 49
      },
      {
        nom: 'Alice',
        faciles: { nb: 10, points: 20 },
        moyens: { nb: 5, points: 25 },
        difficiles: { nb: 2, points: 20 },
        totalPoints: 65
      },
      {
        nom: 'Bob',
        faciles: { nb: 12, points: 24 },
        moyens: { nb: 3, points: 15 },
        difficiles: { nb: 1, points: 10 },
        totalPoints: 49
      },
      {
        nom: 'Alice',
        faciles: { nb: 10, points: 20 },
        moyens: { nb: 5, points: 25 },
        difficiles: { nb: 2, points: 20 },
        totalPoints: 65
      },
      {
        nom: 'Bob',
        faciles: { nb: 12, points: 24 },
        moyens: { nb: 3, points: 15 },
        difficiles: { nb: 1, points: 10 },
        totalPoints: 49
      },
      {
        nom: 'Alice',
        faciles: { nb: 10, points: 20 },
        moyens: { nb: 5, points: 25 },
        difficiles: { nb: 2, points: 20 },
        totalPoints: 65
      },
      {
        nom: 'Bob',
        faciles: { nb: 12, points: 24 },
        moyens: { nb: 3, points: 15 },
        difficiles: { nb: 1, points: 10 },
        totalPoints: 49
      }
    ];
    return of(data); // simule un appel API
  }
}
