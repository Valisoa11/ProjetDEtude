import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoughnutController, ArcElement, Tooltip, Legend, ChartConfiguration } from 'chart.js';
import { TauxRealisationService } from '../../../../core/services/tauxRealisation/taux-realisation.service';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
@Component({
  selector: 'app-realisation-rate',
  imports: [],
  templateUrl: './realisation-rate.component.html',
  styleUrl: './realisation-rate.component.scss'
})
export class RealisationRateComponent implements AfterViewInit{
  @ViewChild('easyChart', { static: true }) easyChartRef!: ElementRef;
  @ViewChild('mediumChart', { static: true }) mediumChartRef!: ElementRef;
  @ViewChild('hardChart', { static: true }) hardChartRef!: ElementRef;

  constructor(private ticketStatsService: TauxRealisationService) {}

  ngAfterViewInit(): void {
    this.ticketStatsService.getTicketStats().subscribe(stats => {
      this.createDoughnutChart(this.easyChartRef.nativeElement, stats.easy.done, stats.easy.total, '#6BCB77', 'easyText', 'facile');
this.createDoughnutChart(this.mediumChartRef.nativeElement, stats.medium.done, stats.medium.total, '#03628F', 'mediumText', 'moyen');
this.createDoughnutChart(this.hardChartRef.nativeElement, stats.hard.done, stats.hard.total, '#FF6B6B', 'hardText', 'difficile');
    });
  }
  createDoughnutChart(canvas: HTMLCanvasElement, done: number, total: number, color: string, textId: string, type: string) {
    const remaining = total - done;
    const ctx = canvas.getContext('2d');
    
    // Vérification de ctx avant de l'utiliser
    if (!ctx) {
      console.error('Le contexte du canvas est introuvable');
      return;
    }
  
    // Créer le doughnut chart
    const chart = new Chart(ctx!, {
      type: 'doughnut',
      data: {
        labels: ['Faits', 'Non faits'],
        datasets: [{
          data: [done, remaining],
          backgroundColor: [color, '#e0e0e0'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        cutout: '80%', // Taille du trou au centre
        plugins: {
          legend: { display: false },
          title: { display: false }
        },
        animation: {
          animateRotate: true
        },
      },
      plugins: [{
        id: 'doughnut-center-text', // Ajout d'un id pour le plugin
        afterDraw: (chartInstance: any) => {
          const centerX = chartInstance.chartArea.left + (chartInstance.chartArea.right - chartInstance.chartArea.left) / 2;
          const centerY = chartInstance.chartArea.top + (chartInstance.chartArea.bottom - chartInstance.chartArea.top) / 2;
  
          // Taille du trou en fonction du cutout
          const cutout = chartInstance.config.options.cutoutPercentage / 100 * chartInstance.chartArea.width;
  
          // Vérifier si le texteEl existe pour mettre à jour son texte
          const textEl = document.getElementById(textId);
          if (textEl) {
            textEl.innerText = `${done}/${total} ticket${done !== 1 ? 's' : ''} ${type} fait${done !== 1 ? 's' : ''}`;
          }
  
          // Dessiner le texte directement sur le canvas après la création du graphique
          ctx.save();
          ctx.font = '10px Arial';
          ctx.fillStyle = '#333';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          const text = `${done}/${total} ticket${done !== 1 ? 's' : ''} ${type} fait${done !== 1 ? 's' : ''}`;
          ctx.fillText(text, centerX, centerY); // Afficher le texte au centre du doughnut
          ctx.restore();
        }
      }]
    });
  }
  
  

  

}
