import { AbrangenciaFormComponent } from './abrangencia-form/abrangencia-form.component';
import { Routes, RouterModule } from '@angular/router';

import { AbrangenciaComponent } from './abrangencia.component';

const abrangenciaRoutes: Routes = [
 { path: 'abrangencia', component: AbrangenciaComponent, pathMatch: 'full' },
  { path: 'abrangencia/novo', component: AbrangenciaFormComponent},
  { path: 'abrangencia/:id_abrangencia', component: AbrangenciaFormComponent}
];

export const abrangenciaRouting = RouterModule.forChild(abrangenciaRoutes);