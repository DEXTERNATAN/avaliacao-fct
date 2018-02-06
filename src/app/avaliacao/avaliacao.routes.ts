import { AvaliacaoFormComponent } from './avaliacao-form/avaliacao-form.component';
import { Routes, RouterModule } from '@angular/router';

import { AvaliacaoComponent } from './avaliacao.component';
import { LoggedInGuard } from 'app/shared/loggedin.guard';

const avaliacaoRoutes: Routes = [
 { path: 'avaliacao', component: AvaliacaoComponent, pathMatch: 'full', canLoad: [ LoggedInGuard]  , canActivate: [ LoggedInGuard]},
 { path: 'avaliacao/novo', component: AvaliacaoFormComponent, canLoad: [ LoggedInGuard]  , canActivate: [ LoggedInGuard]}
];

export const avaliacaoRouting = RouterModule.forChild(avaliacaoRoutes);