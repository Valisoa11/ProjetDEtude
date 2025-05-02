import { Component } from '@angular/core';
import { ProductivityPeriodsComponent } from "../../components/productivity-periods/productivity-periods.component";
import { ForecastTableComponent } from "../../components/forecast-table/forecast-table.component";
import { ProductivityComponent } from "../../components/productivity/productivity.component";
import { FilterComponent } from "../../../../core/components/filter/filter.component";

@Component({
  selector: 'app-forecast-analysis-page',
  imports: [ProductivityPeriodsComponent, ForecastTableComponent, ProductivityComponent, FilterComponent],
  templateUrl: './forecast-analysis-page.component.html',
  styleUrl: './forecast-analysis-page.component.scss'
})
export class ForecastAnalysisPageComponent {

}
