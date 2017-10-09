import { ProjetoFormComponent } from './projeto-form/projeto-form.component';
import { Routes, RouterModule } from '@angular/router';

import { ProjetoComponent } from './projeto.component';

const projetoRoutes: Routes = [
 { path: 'projeto', component: ProjetoComponent, pathMatch: 'full' },
  { path: 'projeto/novo', component: ProjetoFormComponent},
  { path: 'projeto/:id', component: ProjetoFormComponent}
];

export const projetoRouting = RouterModule.forChild(projetoRoutes);