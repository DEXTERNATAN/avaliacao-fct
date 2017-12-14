import { ReferenciaFormComponent } from './referencia-form/referencia-form.component';
import { Routes, RouterModule } from '@angular/router';

import { ReferenciaComponent } from './referencia.component';
import { LoggedInGuard } from 'app/shared/loggedin.guard';


const referenciaRoutes: Routes = [
 { path: 'referencia', component: ReferenciaComponent, pathMatch: 'full', canLoad: [ LoggedInGuard ]  },
  { path: 'referencia/novo', component: ReferenciaFormComponent, canLoad: [ LoggedInGuard ] },
  { path: 'referencia/:id_referencia_fct_gfe', component: ReferenciaFormComponent, canLoad: [ LoggedInGuard ] }
];

export const referenciaRouting = RouterModule.forChild(referenciaRoutes);