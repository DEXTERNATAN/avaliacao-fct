import { AvaliacaoFormComponent } from './avaliacao-form/avaliacao-form.component';
import { Routes, RouterModule } from '@angular/router';

import { AvaliacaoComponent } from './avaliacao.component';
import { AuthGuard } from 'app/shared/auth.guard';

const avaliacaoRoutes: Routes = [
 { path: 'avaliacao', component: AvaliacaoComponent, pathMatch: 'full' , canActivate: [ AuthGuard ]},
 { path: 'avaliacao/novo', component: AvaliacaoFormComponent, canActivate: [ AuthGuard ]}
// { path: 'avaliacao/:id_resultado', component: AvaliacaoFormComponent}
];

export const avaliacaoRouting = RouterModule.forChild(avaliacaoRoutes);