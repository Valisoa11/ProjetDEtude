import { Component, ElementRef, ViewChild } from '@angular/core';
import { AgentService } from '../../../../core/services/tempsRealisationagent/tempsRealisation/agent.service';
import { Chart, registerables } from 'chart.js';


Chart.register(...registerables);
@Component({
  selector: 'app-time-analysis',
  imports: [],
  templateUrl: './time-analysis.component.html',
  styleUrl: './time-analysis.component.scss'
})
export class TimeAnalysisComponent {
  @ViewChild('easyCanvas') easyRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('mediumCanvas') mediumRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('hardCanvas') hardRef!: ElementRef<HTMLCanvasElement>;

  constructor(private service: AgentService) {}

  ngAfterViewInit(): void {
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const labels = this.service.getWeeksInMonth(month, year);
    const data = this.service.getTicketData();

    this.createLineChart(this.easyRef.nativeElement, 'Tickets Faciles', labels, data.easy, '#6BCB77');
    this.createLineChart(this.mediumRef.nativeElement, 'Tickets Moyens', labels, data.medium, '#03628F');
    this.createLineChart(this.hardRef.nativeElement, 'Tickets Difficiles', labels, data.hard, '#FF6B6B');
  }

  private createLineChart(
    canvas: HTMLCanvasElement,
    label: string,
    labels: string[],
    data: number[],
    color: string
  ) {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, this.withAlpha(color, 0.5));
    gradient.addColorStop(1, this.withAlpha(color, 0.1));

    new Chart(ctx, {
      type: 'line', 
      data: {
        labels,
        datasets: [
          {
            label,
            data,
            fill: true,
            backgroundColor: gradient,
            borderColor: color,
            tension: 0.4,
            showLine : false,
            pointRadius : 0,
            pointHoverBorderWidth : 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
          title: {
            display: false,
            text: label,
          },
          legend: { display : false }
        },
        interaction: {
          mode: 'index',
          intersect: false,
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Semaine',
              align: 'end',
              font: { size: 10, weight: 'bold' }, 
              color: 'black'
            },
            
            grid : {display : false }
          },
          y: {
            title: {
              display: true,
              text: 'Temps (H)',
              align: 'end',
              font: { size: 10, weight: 'bold' }, 
              color: 'black'
            },
            grid : {display : false },
            min: 1,
            max: 10,
            ticks: {
              stepSize: 1,  
              autoSkip: false, 
              maxTicksLimit: 10, 
              callback: function (value) {
                
                if (typeof value === 'number') {
                  return value > 8 ? "" : value; // Si c'est un nombre, fais la comparaison
                }
                return value; // Si ce n'est pas un nombre (par exemple, une chaîne), retourne la valeur telle quelle
              }
              
            },
          },
        },
      },
    });
  }

  private withAlpha(color: string, alpha: number): string {
    const map: any = {
      '#6BCB77': `rgba(107, 203, 119, ${alpha})`,  // vert
      '#03628F': `rgba(3, 98, 143, ${alpha})`,     // bleu
      '#FF6B6B': `rgba(255, 107, 107, ${alpha})`,  // rouge
    };
    return map[color] || color;
  }

}
