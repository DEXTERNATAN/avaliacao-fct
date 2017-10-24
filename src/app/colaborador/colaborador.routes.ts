import { ColaboradorFormComponent } from './colaborador-form/colaborador-form.component';
import { Routes, RouterModule } from '@angular/router';

import { ColaboradorComponent } from './colaborador.component';

const colaboradorRoutes: Routes = [
 { path: 'colaborador', component: ColaboradorComponent, pathMatch: 'full' },
  { path: 'colaborador/novo', component: ColaboradorFormComponent},
  { path: 'colaborador/:idColaborador', component: ColaboradorFormComponent}
];

export const colaboradorRouting = RouterModule.forChild(colaboradorRoutes);