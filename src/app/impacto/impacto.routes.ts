import { ImpactoFormComponent } from './impacto-form/impacto-form.component';
import { Routes, RouterModule } from '@angular/router';

import { ImpactoComponent	 } from './impacto.component';
import { LoggedInGuard } from 'app/shared/loggedin.guard';


const impactoRoutes: Routes = [
	{ path: 'impacto', component: ImpactoComponent, pathMatch: 'full' , canLoad: [ LoggedInGuard]  , canActivate: [ LoggedInGuard] },
  { path: 'impacto/novo', component: ImpactoFormComponent , canLoad: [ LoggedInGuard]  , canActivate: [ LoggedInGuard] },
	{ path: 'impacto/:id_impacto', component: ImpactoFormComponent , canLoad: [ LoggedInGuard]  , canActivate: [ LoggedInGuard] }
];

export const impactoRouting = RouterModule.forChild(impactoRoutes);