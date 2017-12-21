
import { AbrangenciaFormComponent } from './abrangencia-form/abrangencia-form.component';
import { Routes, RouterModule } from '@angular/router';


import { AbrangenciaComponent } from './abrangencia.component';
import { LoggedInGuard } from 'app/shared/loggedin.guard';

const abrangenciaRoutes: Routes = [
 { path: 'abrangencia', component: AbrangenciaComponent, pathMatch: 'full', canLoad: [ LoggedInGuard]  , canActivate: [ LoggedInGuard] },
  { path: 'abrangencia/novo', component: AbrangenciaFormComponent, canLoad: [ LoggedInGuard]  , canActivate: [ LoggedInGuard] },
  { path: 'abrangencia/:id_abrangencia', component: AbrangenciaFormComponent, canLoad: [ LoggedInGuard]  , canActivate: [ LoggedInGuard]}
];

export const abrangenciaRouting = RouterModule.forChild(abrangenciaRoutes);