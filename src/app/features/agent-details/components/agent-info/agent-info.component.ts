import { Component, Input, inject } from '@angular/core';
import { Agent, AgentDetailService } from '../../../../core/services/agentDetail/agent-detail.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-agent-info',
  imports: [CommonModule],
  templateUrl: './agent-info.component.html',
  styleUrl: './agent-info.component.scss'
})
export class AgentInfoComponent {
  private service = inject(AgentDetailService);
  @Input() agent!: Agent;
  agent$: Observable<Agent | undefined> | undefined; // Utiliser un observable pour recevoir l'agent
  stars: number[] = [1, 2, 3, 4, 5];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Récupérer l'ID de l'agent depuis l'URL et appeler le service
    const agentId = +this.route.snapshot.paramMap.get('id')!; // Convertir l'ID en nombre
    this.agent$ = this.service.getAgent(agentId); // Appeler le service pour obtenir l'agent
  }

}
