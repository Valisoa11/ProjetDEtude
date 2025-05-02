import { Component, AfterViewInit, ViewChild, ElementRef, inject } from '@angular/core';
import { PerfGlobService } from '../../../../../../core/services/perfGlob/perf-glob.service';
import { Chart, ChartConfiguration, ChartDataset, registerables } from 'chart.js';

// Enregistre tous les éléments nécessaires de Chart.js
Chart.register(...registerables);

@Component({
  selector: 'app-agent-comparaison',
  templateUrl: './agent-comparaison.component.html',
  styleUrls: ['./agent-comparaison.component.scss']
})
export class AgentComparaisonComponent implements AfterViewInit {
  private perfGlobService = inject(PerfGlobService);
  @ViewChild('barCanvas', { static: true }) barCanvas!: ElementRef<HTMLCanvasElement>;

  constructor() {}

  ngAfterViewInit() {
    console.log('ngAfterViewInit lancé');
    // Obtient le contexte du canvas
    const ctx = this.barCanvas.nativeElement.getContext('2d');
    if (!ctx) return;

    // Récupère les données via le service
    this.perfGlobService.getTicketsData().subscribe(data => {
      console.log('Données reçues:', data);
      this.createChart(data, ctx);
    });
  }

  createChart(data: { agents: string[], currentMonth: number[], lastMonth: number[] }, ctx: CanvasRenderingContext2D) {
    // Limite à 10 agents et ajoute un scroll si plus de 10
    const maxVisible = 12;
    const showScroll = data.agents.length > maxVisible;

    // Si les données ont plus de 10 agents, on les tronque
    const visibleAgents = data.agents.slice(0, maxVisible);
    const visibleLastMonth = data.lastMonth.slice(0, maxVisible);
    const visibleCurrentMonth = data.currentMonth.slice(0, maxVisible);

    // Création de la configuration du graphique
    const config: ChartConfiguration = {
      type: 'bar',
      data: {
        labels: visibleAgents,  // Utilise les agents visibles (limités à 10)
        datasets: [
          {
            label: 'Mois dernier',
            data: visibleLastMonth,  // Utilise les données du mois dernier limitées à 10
            backgroundColor: '#A6A6A6',
            borderColor: '#A6A6A6',
            borderWidth: 1,
            barThickness: 14
          },
          {
            label: 'Mois actuel',
            data: visibleCurrentMonth,  // Utilise les données du mois actuel limitées à 10
            backgroundColor: '#003148',
            borderColor: '#003148',
            borderWidth: 1,
            barThickness: 14
          }
        ]
      },
      options: {
        responsive: true, // important pour scroll horizontal
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
            ticks: {
              display: true  // garde les labels visibles (noms des agents)
            },
            border: {
              display: false // cache la ligne principale de l’axe
            },
            grid: { display: false },
           
          },
          y: {
            title: {
              display: true,
              text: 'Points',
              align: 'end',
              font: { size: 10, weight: 'bold' },
              color: 'black'
            },
            ticks: {
              display: true  // garde les labels visibles (noms des agents)
            },
            border: {
              display: false // cache la ligne principale de l’axe
            },
            beginAtZero: true,
            grid: { display: false },
          }
        }
      }
    };

    // Crée le graphique avec la configuration
    new Chart(ctx, config);
  }
}
