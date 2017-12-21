import { ProjetoFormComponent } from './projeto-form/projeto-form.component';
import { Routes, RouterModule } from '@angular/router';

import { ProjetoComponent } from './projeto.component';
import { LoggedInGuard } from 'app/shared/loggedin.guard';

const projetoRoutes: Routes = [
 { path: 'projeto', component: ProjetoComponent, pathMatch: 'full' , canLoad: [ LoggedInGuard]  , canActivate: [ LoggedInGuard] },
  { path: 'projeto/novo', component: ProjetoFormComponent, canLoad: [ LoggedInGuard]  , canActivate: [ LoggedInGuard] },
  { path: 'projeto/:id_projeto', component: ProjetoFormComponent, canLoad: [ LoggedInGuard]  , canActivate: [ LoggedInGuard] }
];

export const projetoRouting = RouterModule.forChild(projetoRoutes);