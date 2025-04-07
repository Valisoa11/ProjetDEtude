import { Routes } from '@angular/router';
import { AgentListPageComponent } from './features/agent-list/pages/agent-list-page/agent-list-page.component';
import { TicketTrackingPageComponent } from './features/ticket-tracking/pages/ticket-tracking-page/ticket-tracking-page.component';
import { AgentDetailsPageComponent } from './features/agent-details/pages/agent-details-page/agent-details-page.component';
import { GlobalViewPageComponent } from './features/global-view/pages/global-view-page/global-view-page.component';
import { ForecastAnalysisPageComponent } from './features/forecast-analysis/pages/forecast-analysis-page/forecast-analysis-page.component';


export const routes: Routes = [
    { path: '', redirectTo: 'agents', pathMatch: 'full' },
    { path: 'agents', component: AgentListPageComponent },
    { path: 'tickets', component: TicketTrackingPageComponent },
    { path: 'details-agent', component: AgentDetailsPageComponent },
    { path: 'global-view', component: GlobalViewPageComponent },
    { path: 'forecast', component: ForecastAnalysisPageComponent },
    { path: '**', redirectTo: 'agents' }
];
