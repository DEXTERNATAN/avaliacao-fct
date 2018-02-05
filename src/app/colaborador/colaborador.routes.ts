import { ColaboradorFormComponent } from './colaborador-form/colaborador-form.component';
import { Routes, RouterModule } from '@angular/router';

import { ColaboradorComponent } from './colaborador.component';
import { LoggedInGuard } from 'app/shared/loggedin.guard';

const colaboradorRoutes: Routes = [
 { path: 'colaborador', component: ColaboradorComponent, pathMatch: 'full' , canLoad: [ LoggedInGuard]  , canActivate: [ LoggedInGuard] },
  { path: 'colaborador/novo', component: ColaboradorFormComponent, canLoad: [ LoggedInGuard]  , canActivate: [ LoggedInGuard] },
  { path: 'colaborador/:idColaborador', component: ColaboradorFormComponent, canLoad: [ LoggedInGuard]  , canActivate: [ LoggedInGuard] }
];

export const colaboradorRouting = RouterModule.forChild(colaboradorRoutes);