import { ReferenciaFormComponent } from './referencia-form/referencia-form.component';
import { Routes, RouterModule } from '@angular/router';

import { ReferenciaComponent } from './referencia.component';

const referenciaRoutes: Routes = [
 { path: 'referencia', component: ReferenciaComponent, pathMatch: 'full' },
  { path: 'referencia/novo', component: ReferenciaFormComponent},
  { path: 'referencia/:id_referencia_fct_gfe', component: ReferenciaFormComponent}
];

export const referenciaRouting = RouterModule.forChild(referenciaRoutes);