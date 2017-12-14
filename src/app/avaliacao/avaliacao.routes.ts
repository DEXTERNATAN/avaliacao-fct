import { AvaliacaoFormComponent } from './avaliacao-form/avaliacao-form.component';
import { Routes, RouterModule } from '@angular/router';

import { AvaliacaoComponent } from './avaliacao.component';
import { LoggedInGuard } from 'app/shared/loggedin.guard';

const avaliacaoRoutes: Routes = [
 { path: 'avaliacao', component: AvaliacaoComponent, pathMatch: 'full' , canLoad: [ LoggedInGuard ]},
 { path: 'avaliacao/novo', component: AvaliacaoFormComponent, canLoad: [ LoggedInGuard ]}
// { path: 'avaliacao/:id_resultado', component: AvaliacaoFormComponent}
];

export const avaliacaoRouting = RouterModule.forChild(avaliacaoRoutes);