import { Routes, RouterModule } from '@angular/router';

import { ConsultaavaliacaoComponent } from './consultaavaliacao.component';
import { AuthGuard } from 'app/shared/auth.guard';

const consultaavaliacaoRoutes: Routes = [
 { path: 'consultaavaliacao', component: ConsultaavaliacaoComponent, pathMatch: 'full' , canActivate: [ AuthGuard ] }
];

export const consultaavaliacaoRouting = RouterModule.forChild(consultaavaliacaoRoutes);