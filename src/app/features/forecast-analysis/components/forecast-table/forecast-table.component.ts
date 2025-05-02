import { Component, inject } from '@angular/core';
import { ProductiviteTableService, TicketMois } from '../../../../core/services/productiviteTable/productivite-table.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forecast-table',
  imports: [CommonModule ],
  templateUrl: './forecast-table.component.html',
  styleUrl: './forecast-table.component.scss'
})
export class ForecastTableComponent {
  private service = inject(ProductiviteTableService);
  tickets: TicketMois[] = [];

  constructor() {
    this.tickets = this.service.getTicketParMois();
  }

}
