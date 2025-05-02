import { Injectable } from '@angular/core';
import { of } from 'rxjs'; // Importer "of" pour simuler des données retournées par un API

export interface Agent {
  id: number;
  nomPrenom: string;
  poste: string;
  contact: string;
  email: string;
  dateDebut: string;
  performance: number; // Note de performance entre 1 et 5
}

@Injectable({
  providedIn: 'root'
})
export class AgentDetailService {
  
  constructor() { }

  // Simuler l'appel API avec un observable et données fictives
  getAgent(id: number) {
    const agents: Agent[] = [
      { id: 1, nomPrenom: 'Jean Dupont', poste: 'Développeur Front-end', contact: '0123456789', email: 'jean.dupont@example.com', dateDebut: '2022-03-15', performance: 4 },
      { id: 2, nomPrenom: 'Alice Martin', poste: 'Chef de Projet', contact: '0123456790', email: 'alice.martin@example.com', dateDebut: '2021-06-10', performance: 5 },
      { id: 3, nomPrenom: 'Bob Durand', poste: 'Développeur Back-end', contact: '0123456791', email: 'bob.durand@example.com', dateDebut: '2020-08-23', performance: 3 },
    ];

    // Retourner un agent basé sur l'ID (ou null si non trouvé)
    return of(agents.find(agent => agent.id === id)); // Utilisation de `of()` pour retourner un observable
  }
}
