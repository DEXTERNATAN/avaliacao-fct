
import { AbrangenciaFormComponent } from './abrangencia-form/abrangencia-form.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'app/shared/auth.guard';

import { AbrangenciaComponent } from './abrangencia.component';

const abrangenciaRoutes: Routes = [
 { path: 'abrangencia', component: AbrangenciaComponent, pathMatch: 'full', canActivate: [ AuthGuard ] },
  { path: 'abrangencia/novo', component: AbrangenciaFormComponent, canActivate: [ AuthGuard ] },
  { path: 'abrangencia/:id_abrangencia', component: AbrangenciaFormComponent, canActivate: [ AuthGuard ]}
];

export const abrangenciaRouting = RouterModule.forChild(abrangenciaRoutes);