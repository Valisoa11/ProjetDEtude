import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MonthlyVariationService {
  constructor() {}

  getMonths(count: number): string[] {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', ''];
    return months.slice(0, count);
  }


  getDataset(labels: string[], gradient: CanvasGradient) {
    return [{
      label: 'Tickets',
      backgroundColor: gradient,
      
      data: [65, 81, 56, 55, 40,65, 59, 80, 81, 56, 55, 40],
      fill: true,
      tension : 0.4,
      pointRadius : 0,
    }];
  }
}
