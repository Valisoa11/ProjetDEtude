import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ChartConfiguration } from 'chart.js';
import { getWorkingDaysInMonth } from '../../utils/date.utils';
@Injectable({
  providedIn: 'root'
})
export class evolutionTicketService {
  getLabels() {
    throw new Error('Method not implemented.');
  }
  getDataset(gradient: CanvasGradient) {
    throw new Error('Method not implemented.');
  }
  constructor() {}

  getLineChartData(): Observable<{ data: ChartConfiguration['data'], originalLabels: string[] }> {

    // const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
    const holidays = ['2025-04-21', '2025-04-28'];
    const originalLabels = getWorkingDaysInMonth(2025, 6, holidays);
    const numericLabels = originalLabels.map((_, index) => index); 
    

    const data: ChartConfiguration['data'] = {
      labels: numericLabels,
      datasets: [
        {
          label: 'Fermé',
          data: [65, 59, 80,100, 81, 56, 55, 40,65, 59, 80, 81, 56, 55, 40,65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#CB0C3C',
          tension: 0.4,
          borderWidth: 2,
          pointRadius : 1,
          pointHoverRadius : 2 ,
          
        },
        {
          label: 'En cours',
          data: [30, 40, 60, 70, 45, 50, 30,65, 59, 80, 81, 56, 55, 40,65, 59, 80, 81, 56, 55, 40,65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#1FC84C',
          tension: 0.4,
          borderWidth: 2,
          pointRadius : 1,
          pointHoverRadius : 2 
        },
        {
          label: 'Ouvert',
          data: [10, 20, 30, 25, 35, 45, 55,65, 59, 80, 81, 56, 55, 40,65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#007AAE',
          tension: 0.4,
          borderWidth: 2,
          pointRadius : 1,
          pointHoverRadius : 2 
        }
      ]
    };

    return of({data, originalLabels});
  }
}

