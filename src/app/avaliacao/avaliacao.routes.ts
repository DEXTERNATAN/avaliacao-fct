import { AvaliacaoFormComponent } from './avaliacao-form/avaliacao-form.component';
import { Routes, RouterModule } from '@angular/router';

import { AvaliacaoComponent } from './avaliacao.component';

const avaliacaoRoutes: Routes = [
 { path: 'avaliacao', component: AvaliacaoComponent, pathMatch: 'full' }
  //{ path: 'avaliacao/novo', component: AvaliacaoFormComponent},
  //{ path: 'avaliacao/:id_resultado', component: AvaliacaoFormComponent}
];

export const avaliacaoRouting = RouterModule.forChild(avaliacaoRoutes);