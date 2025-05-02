export type Agent = {
    id: number;
    nom: string;
    poste: string;
    nombreTickets: number;
    performance: number;
  };
  
export type AgentKey = keyof Agent;