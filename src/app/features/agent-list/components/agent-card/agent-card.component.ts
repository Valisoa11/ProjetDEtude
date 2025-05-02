import { Component, Input , OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgentKey, Agent } from '../../../../core/models/agent.model';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ListeAgentService } from '../../../../core/services/listeAgent/liste-agent.service';



@Component({
  selector: 'app-agent-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agent-card.component.html',
  styleUrls: ['./agent-card.component.scss']
})
export class AgentCardComponent implements OnInit{
  @Input() triPar: AgentKey = 'id'; // Valeur par défaut
  @Output() totalAgent = new EventEmitter<number>();
  constructor(private router: Router , private listeAgent : ListeAgentService) {}


  tousLesAgents: Agent[] = [];

  agents: Agent[] = [
    { id: 1, nom: 'Rlice', poste: 'Support', nombreTickets: 25, performance: 4 },
    { id: 2, nom: 'Bob', poste: 'Ventes', nombreTickets: 15, performance: 3 },
    { id: 3, nom: 'Charlie', poste: 'Développement', nombreTickets: 30, performance: 5 },
    { id: 4, nom: 'David', poste: 'Support', nombreTickets: 20, performance: 2 },
    { id: 5, nom: 'Eve', poste: 'Marketing', nombreTickets: 10, performance: 4 },
    { id: 6, nom: 'Frank', poste: 'RH', nombreTickets: 18, performance: 3 },
    { id: 7, nom: 'Grace', poste: 'Tech', nombreTickets: 22, performance: 4 },
  ];
  ngOnInit() {
    this.listeAgent.getAgents().subscribe((data) => {
      this.agents = data;
      
    });
    this.totalAgent.emit(this.agents.length);
  }
  


  filterText: string = '';
  goToDetails(agentId: number) {
    this.router.navigate(['/details-agent', agentId]);
  }
  filteredAgents(): Agent[] {
    const agentsFiltres = this.agents.filter(agent =>
      agent.nom.toLowerCase().includes(this.filterText.toLowerCase()) ||
      agent.poste.toLowerCase().includes(this.filterText.toLowerCase())
    );

    return agentsFiltres.sort((a, b) => {
      const aValue = a[this.triPar as keyof Agent];
      const bValue = b[this.triPar as keyof Agent];

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return aValue.localeCompare(bValue);
      }

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return aValue - bValue;
      }

      return 0;
    });
  }

  getStars(performance: number): boolean[] {
    return new Array(5).fill(false).map((_, index) => index < performance);
  }

  
}
