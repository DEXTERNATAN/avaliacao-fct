import { PesosFormComponent } from './pesos-form/pesos-form.component';
import { Routes, RouterModule } from '@angular/router';

import { PesosComponent } from './pesos.component';
import { LoggedInGuard } from 'app/shared/loggedin.guard';


const pesosRoutes: Routes = [
 { path: 'pesos', component: PesosComponent, pathMatch: 'full', canLoad: [ LoggedInGuard]  , canActivate: [ LoggedInGuard]  },
  { path: 'pesos/novo', component: PesosFormComponent, canLoad: [ LoggedInGuard]  , canActivate: [ LoggedInGuard] },
  { path: 'pesos/:id_pesos', component: PesosFormComponent, canLoad: [ LoggedInGuard]  , canActivate: [ LoggedInGuard] }
];

export const pesosRouting = RouterModule.forChild(pesosRoutes);