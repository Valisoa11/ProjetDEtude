import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentKey } from '../../models/agent.model';

@Component({
  selector: 'app-triage',
  templateUrl: './triage.component.html',
  imports: [CommonModule],
  styleUrls: ['./triage.component.scss']
})
export class TriageComponent {

  @Output() trieChange = new EventEmitter<AgentKey>();

  listeTrie: AgentKey[] = ['id', 'nom', 'poste', 'nombreTickets', 'performance'];

  trierPar: AgentKey = 'id'; 

  trieDropdownVisible: boolean = false;

  toggleTrieDropdown(): void {
    this.trieDropdownVisible = !this.trieDropdownVisible;
  }

  selectTrie(trie: AgentKey): void {
    this.trierPar = trie;
    this.trieChange.emit(trie); // Assure que trie est de type AgentKey
    this.trieDropdownVisible = false;
  }
}
