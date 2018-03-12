import { Routes, RouterModule } from '@angular/router';

import { ConsultaavaliacaoComponent } from './consultaavaliacao.component';
import { LoggedInGuard } from 'app/shared/loggedin.guard';

const consultaavaliacaoRoutes: Routes = [
 { path: 'resultadoAvaliacao', component: ConsultaavaliacaoComponent, pathMatch: 'full' , canLoad: [ LoggedInGuard]  , canActivate: [ LoggedInGuard] }
];

export const consultaavaliacaoRouting = RouterModule.forChild(consultaavaliacaoRoutes);