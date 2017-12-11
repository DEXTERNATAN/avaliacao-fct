import { ProjetoFormComponent } from './projeto-form/projeto-form.component';
import { Routes, RouterModule } from '@angular/router';

import { ProjetoComponent } from './projeto.component';
import { AuthGuard } from 'app/shared/auth.guard';

const projetoRoutes: Routes = [
 { path: 'projeto', component: ProjetoComponent, pathMatch: 'full' , canActivate: [ AuthGuard ] },
  { path: 'projeto/novo', component: ProjetoFormComponent, canActivate: [ AuthGuard ] },
  { path: 'projeto/:id_projeto', component: ProjetoFormComponent, canActivate: [ AuthGuard ] }
];

export const projetoRouting = RouterModule.forChild(projetoRoutes);