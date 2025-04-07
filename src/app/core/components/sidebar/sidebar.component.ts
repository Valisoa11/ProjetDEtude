import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, input, output } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  // @Input() isLeftSidebarCollapsed: boolean = false;  
  // @Output() changeIsLeftSidebarCollapsed: EventEmitter<boolean> = new EventEmitter<boolean>();
  items = [
    {
      routeLink: 'agents',
      icon: 'fa-solid fa-rectangle-list',
      label: 'Liste des agents',
    },
    {
      routeLink: 'tickets',
      icon: 'fa-solid fa-ticket',
      label: 'Suivis des tickets',
    },
    {
      routeLink: 'details-agent',
      icon: 'fa-solid fa-address-card',
      label: 'Details agents',
    },
    {
      routeLink: 'global-view',
      icon: 'fa-solid fa-chart-simple',
      label: 'Performance globale',
    },
    {
      routeLink: 'forecast',
      icon: 'fa-solid fa-chart-mixed',
      label: 'Analyse et prévision',
    },
  ];

  

}
