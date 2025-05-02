import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, ChartConfiguration, ChartType, registerables } from 'chart.js';
import { evolutionTicketService } from '../../../../core/services/evolutionTicket/evolution-ticket.service';
import zoomPlugin from 'chartjs-plugin-zoom';
import 'chartjs-plugin-annotation';


Chart.register(...registerables, zoomPlugin);

@Component({
  selector: 'app-ticket-evolution',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket-evolution.component.html',
  styleUrl: './ticket-evolution.component.scss'
})
export class TicketEvolutionComponent implements OnInit {
  @ViewChild('lineCanvas', { static: true }) lineCanvas!: ElementRef;

  openCount: number = 0;
  closedCount: number = 0;
  inProgressCount: number = 0;
  totalCount: number = 0;

  constructor(private evolutionTicketService: evolutionTicketService) {}

  ngOnInit(): void {
    this.evolutionTicketService.getLineChartData().subscribe(({ data, originalLabels }) => {
      if (!data.labels || data.labels.length === 0) return;

    this.calculateTotals(data); // ✅ Calcul des totaux

    const firstDate = new Date(originalLabels[0]);
    const monthName = firstDate.toLocaleDateString('fr-FR', { month: 'long' });
    const year = firstDate.getFullYear();
    const xAxisTitle = this.capitalizeFirstLetter(monthName) + ' ' + year;

    const config: ChartConfiguration = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,

        scales: {
          x: {
           
            title: {
                display: true,
                text: xAxisTitle,
                align: 'end',
                font: { size: 10}, 
                color: '#787878',
            },
            
            
            grid: { display: false },
            ticks: {
              color: '#B3B3B3', // couleur des ticks sur l’axe X
              font: {
                size: 10,
                weight: 'normal',
                family: 'sousTitre', 
              },
              maxRotation: 0,
              autoSkip: false,
              callback: function (value, index, ticks) {
                const i = Number(value); // value est l'index numérique
                return originalLabels[i] 
                  ? new Date(originalLabels[i]).getDate() 
                  : '';
              }
            }
          },
          y: {
            title: {
              display: true,
              text: 'Nb de Tickets (en %)',
              align: 'end',
              font: { size:10 },
              color: '#787878',
            },
            ticks: {
              color: '#B3B3B3', // couleur des ticks sur l’axe X
              font: {
                size: 10,
                weight: 'normal',
                family: 'sousTitre', 
              },
              
            }
          }
        },
        plugins: {
          tooltip: {
            enabled: true,
            mode: 'index',
            intersect: false,
            backgroundColor: 'rgba(0,0,0,0.8)',
            titleFont: { size: 14 },
            bodyFont: { size: 12 },
            padding: 10
          },
          zoom: {
            pan: { enabled: true, mode: 'x' },
            zoom: {
              wheel: { enabled: true },
              pinch: { enabled: true },
              mode: 'x'
            }
          },
          legend: {
            display: true,
            position: 'right',
            labels: {
              usePointStyle: true,
              boxWidth: 5,
              boxHeight: 5,
              color: '#646464',
              font: { size: 10 }
            }
          }
        }
      }
    };

    new Chart(this.lineCanvas.nativeElement, config);
    });
  }

  calculateTotals(data: any): void {
    const getSum = (label: string): number => {
      const dataset = data.datasets.find((d: any) => d.label.trim().toLowerCase() === label.toLowerCase());
      return dataset?.data?.reduce((acc: number, val: number) => acc + Number(val), 0) || 0;
    };

    this.openCount = getSum('Ouvert');
    this.closedCount = getSum('Fermé');
    this.inProgressCount = getSum('En cours');
    this.totalCount = this.openCount + this.closedCount + this.inProgressCount;
  }

  capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
