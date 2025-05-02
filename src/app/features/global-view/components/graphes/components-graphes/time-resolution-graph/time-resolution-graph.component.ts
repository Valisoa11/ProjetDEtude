import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { ChartConfiguration, Chart } from 'chart.js';
import { TempsGlobService } from '../../../../../../core/services/tempsGlob/temps-glob.service';

@Component({
  selector: 'app-time-resolution-graph',
  templateUrl: './time-resolution-graph.component.html',
  styleUrls: ['./time-resolution-graph.component.scss'],
  standalone: true
})
export class TimeResolutionGraphComponent {
  private tempsGlobService = inject(TempsGlobService);
  @ViewChild('barCanvas', { static: true }) barCanvas!: ElementRef<HTMLCanvasElement>;

  constructor() {}

  ngAfterViewInit() {
    console.log('ngAfterViewInit lancé');
    const ctx = this.barCanvas.nativeElement.getContext('2d');
    if (!ctx) return;

    this.tempsGlobService.getTimesData().subscribe(data => {
      console.log('Données reçues:', data);
      this.createChart(data, ctx);
    });
  }

  createChart(
    data: { agents: string[], ticketFacile: number[], ticketMoyen: number[], ticketDiff: number[] },
    ctx: CanvasRenderingContext2D
  ) {
    const maxVisible = 10;

    // Limitation à 10 agents
    const visibleAgents = data.agents.slice(0, maxVisible);
    const visibleFacile = data.ticketFacile.slice(0, maxVisible);
    const visibleMoyen = data.ticketMoyen.slice(0, maxVisible);
    const visibleDiff = data.ticketDiff.slice(0, maxVisible);

    const config: ChartConfiguration = {
      type: 'bar',
      data: {
        labels: visibleAgents,
        datasets: [
          {
            label: 'Ticket facile',
            data: visibleFacile,
            backgroundColor: '#6BCB77',
            borderColor: '#6BCB77',
            borderWidth: 1,
            barThickness: 14
          },
          {
            label: 'Ticket moyen',
            data: visibleMoyen,
            backgroundColor: '#03628F',
            borderColor: '#03628F',
            borderWidth: 1,
            barThickness: 14
          },
          {
            label: 'Ticket difficile',
            data: visibleDiff,
            backgroundColor: '#FF6B6B',
            borderColor: '#FF6B6B',
            borderWidth: 1,
            barThickness: 14
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            align: 'end',
            labels: {
              boxWidth: 20,
              padding: 15
            }
          }
        },
        scales: {
          x: {
            ticks: { display: true },
            border: { display: false },
            grid: { display: false },
            
          },
          y: {
            title: {
              display: true,
              text: 'Heure',
              align: 'end',
              font: { size: 10, weight: 'bold' },
              color: 'black'
            },
            ticks: { display: true },
            border: { display: false },
            beginAtZero: true,
            grid: { display: false }
          }
        }
      }
    };

    new Chart(ctx, config);
  }
}
