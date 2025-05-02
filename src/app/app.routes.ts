import { Routes } from '@angular/router';
import { AgentListPageComponent } from './features/agent-list/pages/agent-list-page/agent-list-page.component';
import { TicketTrackingPageComponent } from './features/ticket-tracking/pages/ticket-tracking-page/ticket-tracking-page.component';
import { AgentDetailsPageComponent } from './features/agent-details/pages/agent-details-page/agent-details-page.component';
import { GlobalViewPageComponent } from './features/global-view/pages/global-view-page/global-view-page.component';
import { ForecastAnalysisPageComponent } from './features/forecast-analysis/pages/forecast-analysis-page/forecast-analysis-page.component';


export const routes: Routes = [
    { path: '', redirectTo: 'agents', pathMatch: 'full' },
    {
      path: 'agents',
      loadComponent: () =>
        import('./features/agent-list/pages/agent-list-page/agent-list-page.component').then(
          (m) => m.AgentListPageComponent
        ),
    },
    {
      path: 'tickets',
      loadComponent: () =>
        import('./features/ticket-tracking/pages/ticket-tracking-page/ticket-tracking-page.component').then(
          (m) => m.TicketTrackingPageComponent
        ),
    },
    {
      path:  'details-agent/:id',
      loadComponent: () =>
        import('./features/agent-details/pages/agent-details-page/agent-details-page.component').then(
          (m) => m.AgentDetailsPageComponent
        ),
    },
    {
      path: 'global-view',
      loadComponent: () =>
        import('./features/global-view/pages/global-view-page/global-view-page.component').then(
          (m) => m.GlobalViewPageComponent
        ),
    },
    {
      path: 'forecast',
      loadComponent: () =>
        import('./features/forecast-analysis/pages/forecast-analysis-page/forecast-analysis-page.component').then(
          (m) => m.ForecastAnalysisPageComponent
        ),
    },
    { path: '**', redirectTo: 'agents' }
];
