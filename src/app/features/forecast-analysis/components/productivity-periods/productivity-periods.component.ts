import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { ProductivityPeriodeService } from '../../../../core/services/productivityPeriode/productivity-periode.service';
import { ChartConfiguration, Chart } from 'chart.js';

@Component({
  selector: 'app-productivity-periods',
  imports: [],
  templateUrl: './productivity-periods.component.html',
  styleUrl: './productivity-periods.component.scss'
})
export class ProductivityPeriodsComponent {
  private ticketService = inject(ProductivityPeriodeService);
  @ViewChild('stackedCanvas', { static: true }) stackedCanvas!: ElementRef<HTMLCanvasElement>;

  constructor() {}

  ngAfterViewInit() {
    const ctx = this.stackedCanvas.nativeElement.getContext('2d');
    if (!ctx) return;

    this.ticketService.getStackedTicketData().subscribe(chartData => {
      const config: ChartConfiguration = {
        type: 'bar',
        data: {
          labels: chartData.labels,
          datasets: chartData.datasets.map(dataset => ({
            ...dataset,
            barThickness: 20 // Ajuste ici selon ce que tu veux visuellement
          }))
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: 'Identification des périodes de forte activité',
              font: { size: 18 },
              color: 'black'
            },
            legend: {
              position: 'right',
              align: 'center',
              labels: {
                color: 'black'
              }
            }
          },
          scales: {
            x: {
              stacked: true,
              ticks: { color: 'black' },
              title: {
                display: true,
                text: 'Mois',
                align: 'end',
                font: { size: 10, weight: 'bold' }, 
                color: 'black'
              },
            },
            y: {
              stacked: true,
              ticks: { color: 'black' },
              title: {
                display: true,
                text: 'Nombre de tickets',
                color: 'black',
                font: { weight: 'bold' }
              }
            }
          }
        }
      };

      new Chart(ctx, config);
    });
  }

}
