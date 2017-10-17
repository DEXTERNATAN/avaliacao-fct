import { PesosFormComponent } from './pesos-form/pesos-form.component';
import { Routes, RouterModule } from '@angular/router';

import { PesosComponent } from './pesos.component';

const pesosRoutes: Routes = [
 { path: 'pesos', component: PesosComponent, pathMatch: 'full' },
  { path: 'pesos/novo', component: PesosFormComponent},
  { path: 'pesos/:id_pesos', component: PesosFormComponent}
];

export const pesosRouting = RouterModule.forChild(pesosRoutes);