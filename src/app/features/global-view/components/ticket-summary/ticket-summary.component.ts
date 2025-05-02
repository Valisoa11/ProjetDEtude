import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, ArcElement, Tooltip } from 'chart.js';

Chart.register(ArcElement, Tooltip);

@Component({
  selector: 'app-ticket-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticket-summary.component.html',
  styleUrl: './ticket-summary.component.scss'
})
export class TicketSummaryComponent implements AfterViewInit {
  @ViewChild('doughnutCanvas') doughnutCanvas!: ElementRef<HTMLCanvasElement>;

  totalDonePercent = 75; // Pourcentage total de tickets réalisés

  // Données des types de tickets
  ticketData = [
    {
      label: 'Ticket facile',
      percent: 20,
      colorClass: 'easy-colored',
      filledCircles: Array(5).fill(false),
      count: 0
    },
    {
      label: 'Ticket moyen',
      percent: 20,
      colorClass: 'medium-colored',
      filledCircles: Array(5).fill(false),
      count: 0
    },
    {
      label: 'Ticket difficile',
      percent: 40,
      colorClass: 'hard-colored',
      filledCircles: Array(5).fill(false),
      count: 0
    }
  ];

  ngAfterViewInit(): void {
    this.createDoughnut(this.totalDonePercent);
    this.prepareCircles();
  }

  createDoughnut(donePercent: number) {
    const ctx = this.doughnutCanvas.nativeElement.getContext('2d');
    if (!ctx) return;

    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Réalisés', 'Restants'],
        datasets: [{
          data: [donePercent, 100 - donePercent],
          backgroundColor: ['#6BCB77', '#e0e0e0'],
          borderWidth: 0
        }]
      },
      options: {
        cutout: '80%',
        responsive: true,
        maintainAspectRatio: false,
        rotation: -90,
        circumference: 180,
        plugins: {
          tooltip: {
            enabled: false
          },
          legend: {
            display: false
          }
        }
      }
    });
  }

  prepareCircles() {
    this.ticketData.forEach(ticket => {
      const filledCount = Math.round(ticket.percent / 20); // 5 cercles -> chaque cercle = 20%
      ticket.count = filledCount;
    });
  }
}
