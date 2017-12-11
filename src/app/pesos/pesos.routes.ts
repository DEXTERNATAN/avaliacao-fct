import { PesosFormComponent } from './pesos-form/pesos-form.component';
import { Routes, RouterModule } from '@angular/router';

import { PesosComponent } from './pesos.component';
import { AuthGuard } from 'app/shared/auth.guard';

const pesosRoutes: Routes = [
 { path: 'pesos', component: PesosComponent, pathMatch: 'full', canActivate: [ AuthGuard ]  },
  { path: 'pesos/novo', component: PesosFormComponent, canActivate: [ AuthGuard ] },
  { path: 'pesos/:id_pesos', component: PesosFormComponent, canActivate: [ AuthGuard ] }
];

export const pesosRouting = RouterModule.forChild(pesosRoutes);