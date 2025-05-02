import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartDataset, ChartType, registerables, ChartData } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import { MonthlyVariationService } from '../../../../core/services/monthlyVariation/monthly-variation.service';
import { GRADIENT_COLORS } from '../../../../core/utils/couleurs';

Chart.register(...registerables, zoomPlugin);
@Component({
  selector: 'app-monthly-variation',
  imports: [],
  templateUrl: './monthly-variation.component.html',
  styleUrl: './monthly-variation.component.scss'
})
export class MonthlyVariationComponent implements AfterViewInit{
  @ViewChild('lineCanvas') lineCanvas!: ElementRef<HTMLCanvasElement>;

  constructor(private dataService: MonthlyVariationService) {}

  ngAfterViewInit() {
    const canvas = this.lineCanvas.nativeElement;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    // Création du gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);

    // Application du gradient selon les stops définis
    GRADIENT_COLORS.forEach(({ offset, color }) => {
      gradient.addColorStop(offset, color);
    });
    // Labels dynamiques
    const labels = this.dataService.getMonths(14);
    const datasets = this.dataService.getDataset(labels, gradient);
    const allValues = datasets.flatMap((ds: ChartDataset<'line'>) => ds.data as number[]);
    const minY = Math.min(...allValues);
    const maxY = Math.max(...allValues);
    const padding = 20;
    const config: ChartConfiguration = {
      type: 'line',
      data: {
        labels,
        datasets
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Variation mensuelle des tickets',
            align: 'center',
              font: { size: 20}, 
              color: 'white'
          },
          legend: {
            display : false,
          }
        },
        interaction: {
          mode: 'index',
          intersect: false
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Mois',
              align: 'end',
              font: { size: 10, weight: 'bold' }, 
              color: 'white'
            },
            border: {
              color: '#FFFFFF' // 🔶 Couleur de la ligne de l'axe X
            },
            grid: { display: false },
            ticks: {
              autoSkip: false,
              color: 'white' // 
            },
          },
          y: {
            title: {
              display: true,
              text: 'Nb de tickets',
              align: 'end',
              font: { size: 10, weight: 'bold' }, 
              color: 'white'
            },
            border: {
              color: '#FFFFFF' 
            },
            grid: { display: false },
            ticks: {
              color: 'white',
              callback: function (value, index, ticks) {
                if (index === ticks.length - 1) {
                  return '';
                }
                return value;
              }
            },
            suggestedMin: minY - padding,
            suggestedMax: maxY + padding,
          }
        },
        
      }
    };

    new Chart(ctx, config);
  }
}
