import { Routes, RouterModule } from '@angular/router';

import { ConsultaavaliacaoComponent } from './consultaavaliacao.component';

const consultaavaliacaoRoutes: Routes = [
 { path: 'consultaavaliacao', component: ConsultaavaliacaoComponent, pathMatch: 'full' }
];

export const consultaavaliacaoRouting = RouterModule.forChild(consultaavaliacaoRoutes);