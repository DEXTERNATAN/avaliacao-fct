import { ReferenciaFormComponent } from './referencia-form/referencia-form.component';
import { Routes, RouterModule } from '@angular/router';

import { ReferenciaComponent } from './referencia.component';
import { AuthGuard } from 'app/shared/auth.guard';

const referenciaRoutes: Routes = [
 { path: 'referencia', component: ReferenciaComponent, pathMatch: 'full', canActivate: [ AuthGuard ]  },
  { path: 'referencia/novo', component: ReferenciaFormComponent, canActivate: [ AuthGuard ] },
  { path: 'referencia/:id_referencia_fct_gfe', component: ReferenciaFormComponent, canActivate: [ AuthGuard ] }
];

export const referenciaRouting = RouterModule.forChild(referenciaRoutes);