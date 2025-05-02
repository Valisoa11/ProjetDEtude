import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, DoughnutController, ArcElement, Tooltip, Legend, ChartConfiguration } from 'chart.js';
import { RepartionTicketsService } from '../../../../core/services/repartitionTickets/repartion-tickets.service';
import { couleurs } from '../../../../core/utils/couleurs';

// Enregistrement des composants nécessaires de Chart.js
Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

@Component({
  selector: 'app-ticket-repartition',
  imports: [CommonModule],
  templateUrl: './ticket-repartition.component.html',
  styleUrl: './ticket-repartition.component.scss'
})
export class TicketRepartitionComponent implements AfterViewInit {
  @ViewChild('chartCanvas', { static: true }) chartCanvas!: ElementRef<HTMLCanvasElement>;
  chart!: Chart;

  constructor(private chartService: RepartionTicketsService) {}

  ngAfterViewInit() {
    this.chartService.getChartData().subscribe(({ total, agents }) => {
      const labels = agents.map(agent => {
        const percent = ((agent.tickets / total) * 100).toFixed(1);
        return `${percent}% - ${agent.tickets}/${total} - ${agent.name}`;
      });

      const data = agents.map(agent => agent.tickets);
      const backgroundColor = agents.map((_, index) => couleurs[index % couleurs.length]);

      const chartData = {
        labels,
        datasets: [{
          data,
          backgroundColor,
          borderWidth: 0,
          borderColor: 'transparent',
          hoverOffset: 8
        }]
      };

      // ✅ Plugin pour le texte centré dans le donut
      const centerTextPlugin = {
        id: 'centerText',
        beforeDraw(chart: Chart) {
          const { ctx, chartArea } = chart;
          const active = chart.getActiveElements()[0];

          if (!ctx || !chartArea || !active) return;

          const dataset = chart.data.datasets[active.datasetIndex];
          const label = chart.data.labels![active.index] as string;
          const value = dataset.data[active.index];

          const agentName = label.split(' - ').slice(-1)[0];

          const centerX = (chartArea.left + chartArea.right) / 2;
          const centerY = (chartArea.top + chartArea.bottom) / 2;

          ctx.save();
          ctx.font = 'bold 14px Arial';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = '#333';

          ctx.fillText(agentName, centerX, centerY - 10);
          ctx.fillText(`${value} tickets / ${total}`, centerX, centerY + 10);
          ctx.restore();
        }
      };

      // ✅ Plugin pour le cercle sur la portion avec pourcentage
      const percentBubblePlugin = {
        id: 'percentBubble',
        afterDraw(chart: Chart) {
          const ctx = chart.ctx!;
          const active = chart.getActiveElements()[0];
          if (!active) return;

          const meta = chart.getDatasetMeta(active.datasetIndex);
          const arc = meta.data[active.index];
          const tooltipModel = arc.tooltipPosition(true);

          const label = chart.data.labels![active.index] as string;
          const percentage = label.split('%')[0];

          const x = tooltipModel.x ;
          const y = tooltipModel.y;

          ctx.save();
          ctx.beginPath();
          ctx.arc(x, y, 18, 0, 2 * Math.PI);
          ctx.fillStyle = '#ffffff';
          ctx.fill();
          ctx.lineWidth = 1;
          ctx.strokeStyle = '#666';
          ctx.stroke();

          ctx.fillStyle = '#333';
          ctx.font = 'bold 11px Arial';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(`${percentage}%`, x, y);
          ctx.restore();
        }
      };

      const config: ChartConfiguration<'doughnut'> = {
        type: 'doughnut',
        data: chartData,
        options: {
          cutout: '80%',
          plugins: {
            title: {
              display: true,
              text: 'Repartition des tickets',
              align: 'center',
                font: { size: 20}, 
                color: 'black'
            },
            
            legend: {
              display: false
            },
            tooltip: {
              enabled: false
            }
          }
        },
        plugins: [centerTextPlugin, percentBubblePlugin]
      };

      this.chart = new Chart(this.chartCanvas.nativeElement, config);
    });
  }
}
