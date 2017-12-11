import { ImpactoFormComponent } from './impacto-form/impacto-form.component';
import { Routes, RouterModule } from '@angular/router';

import { ImpactoComponent	 } from './impacto.component';
import { AuthGuard } from 'app/shared/auth.guard';

const impactoRoutes: Routes = [
	{ path: 'impacto', component: ImpactoComponent, pathMatch: 'full' , canActivate: [ AuthGuard ] },
  { path: 'impacto/novo', component: ImpactoFormComponent , canActivate: [ AuthGuard ] },
	{ path: 'impacto/:id_impacto', component: ImpactoFormComponent , canActivate: [ AuthGuard ] }
];

export const impactoRouting = RouterModule.forChild(impactoRoutes);