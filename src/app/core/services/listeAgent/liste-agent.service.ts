import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agent } from '../../models/agent.model';
@Injectable({
  providedIn: 'root'
})
export class ListeAgentService {

  private apiUrl = ''; // Remplace cette URL par celle de ton backend

  constructor(private http: HttpClient) {}

  getAgents(): Observable<Agent[]> {
    return this.http.get<Agent[]>(this.apiUrl);
  }
}
