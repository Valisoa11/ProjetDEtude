import { Component } from '@angular/core';
import { AgentComparaisonComponent } from "../../components-graphes/agent-comparaison/agent-comparaison.component";
import { TimeResolutionGraphComponent } from "../../components-graphes/time-resolution-graph/time-resolution-graph.component";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-page-graphe',
  imports: [AgentComparaisonComponent, TimeResolutionGraphComponent, CommonModule],
  templateUrl: './page-graphe.component.html',
  styleUrl: './page-graphe.component.scss'
})
export class PageGrapheComponent {
  selectedView: string = 'vue'; 

}
