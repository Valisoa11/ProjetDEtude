import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { ProductiviteAgentService } from '../../../../core/services/productiviteAgent/productivite-agent.service';
import { ChartConfiguration, Chart, registerables } from 'chart.js';

Chart.register(...registerables);
@Component({
  selector: 'app-productivity',
  imports: [],
  templateUrl: './productivity.component.html',
  styleUrl: './productivity.component.scss'
})
export class ProductivityComponent implements AfterViewInit{
  private dataService = inject(ProductiviteAgentService);

  @ViewChild('canvasFaciles') canvasFaciles!: ElementRef<HTMLCanvasElement>;
  @ViewChild('canvasMoyens') canvasMoyens!: ElementRef<HTMLCanvasElement>;
  @ViewChild('canvasDifficiles') canvasDifficiles!: ElementRef<HTMLCanvasElement>;

  ngAfterViewInit() {
    this.dataService.getScatterData().subscribe((data) => {
      this.createChart(this.canvasFaciles.nativeElement, 'Tickets Faciles', data.faciles, '#6BCB77');
      this.createChart(this.canvasMoyens.nativeElement, 'Tickets Moyens', data.moyens, '#03628F');
      this.createChart(this.canvasDifficiles.nativeElement, 'Tickets Difficiles', data.difficiles, '#FF6B6B');
    });
  }

  private createChart(canvas: HTMLCanvasElement, label: string, dataPoints: { x: number; y: number }[], color: string) {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const config: ChartConfiguration = {
      type: 'scatter',
      data: {
        datasets: [
          {
            label,
            data: dataPoints,
            borderColor: color,
            backgroundColor: this.transparentize(color, 0.5)
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: label,
            color: 'black',
            font: { size: 18 }
          },
          legend: { display : false }
        },
        scales: {
          x: {
            
            title: {
              display: true,
              text: 'Nb tickets',
              align: 'end',
              font: { size: 10, weight: 'bold' }, 
              color: 'black'
            },
            
            ticks: { color: 'black' }
          },
          y: {
            min: 1,
            max: 8,
            title: {
              display: true,
              text: 'Temps (h)',
              align: 'end',
              font: { size: 10, weight: 'bold' }, 
              color: 'black'
            },
            ticks: {
              stepSize: 1,
             
              color: 'black'
            }
          }
        }
      }
    };

    new Chart(ctx, config);
  }

  private transparentize(color: string, opacity: number): string {
    return color.replace('rgb', 'rgba').replace(')', `, ${opacity})`);
  }

}
