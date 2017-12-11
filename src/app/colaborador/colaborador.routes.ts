import { ColaboradorFormComponent } from './colaborador-form/colaborador-form.component';
import { Routes, RouterModule } from '@angular/router';

import { ColaboradorComponent } from './colaborador.component';
import { AuthGuard } from 'app/shared/auth.guard';

const colaboradorRoutes: Routes = [
 { path: 'colaborador', component: ColaboradorComponent, pathMatch: 'full' , canActivate: [ AuthGuard ] },
  { path: 'colaborador/novo', component: ColaboradorFormComponent, canActivate: [ AuthGuard ] },
  { path: 'colaborador/:idColaborador', component: ColaboradorFormComponent, canActivate: [ AuthGuard ] }
];

export const colaboradorRouting = RouterModule.forChild(colaboradorRoutes);