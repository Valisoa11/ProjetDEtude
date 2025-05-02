import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter',
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  months: string[] = [];
  years: number[] = [];
  currentMonth: string = '';
  currentYear: number = new Date().getFullYear();

  monthDropdownVisible: boolean = false;
  yearDropdownVisible: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.generateMonths();
    this.generateYears();
    this.setCurrentMonth();
  }

  // Génère la liste des mois
  generateMonths(): void {
    const months = [
      'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
      'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];
    this.months = months;
  }

  // Génère la liste des années
  generateYears(): void {
    const currentYear = new Date().getFullYear();
    this.years = [];
    for (let year = currentYear; year >= 2010; year--) {
      this.years.push(year);
    }
  }

  // Définit le mois actuel
  setCurrentMonth(): void {
    const monthIndex = new Date().getMonth(); // 0 = Janvier, 1 = Février, ...
    this.currentMonth = this.months[monthIndex];
  }

  // Affiche/masque le menu déroulant des mois
  toggleMonthDropdown(): void {
    this.monthDropdownVisible = !this.monthDropdownVisible;
    this.yearDropdownVisible = false; // Masquer le menu des années si celui des mois est ouvert
  }

  // Affiche/masque le menu déroulant des années
  toggleYearDropdown(): void {
    this.yearDropdownVisible = !this.yearDropdownVisible;
    this.monthDropdownVisible = false; // Masquer le menu des mois si celui des années est ouvert
  }

  // Sélectionne un mois
  selectMonth(month: string): void {
    this.currentMonth = month;
    this.monthDropdownVisible = false;
  }

  // Sélectionne une année
  selectYear(year: number): void {
    this.currentYear = year;
    this.yearDropdownVisible = false;
  }

  // Ouvre un calendrier (fonction de base)
  openCalendar(): void {
    alert('Ouvrir un calendrier');
    // Ici, tu peux intégrer une bibliothèque de calendrier comme ngx-bootstrap ou autre
  }
}
