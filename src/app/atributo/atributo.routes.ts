import { AtributoFormComponent } from './atributo-form/atributo-form.component';
import { Routes, RouterModule } from '@angular/router';

import { AtributoComponent } from './atributo.component';

const atributoRoutes: Routes = [
 { path: 'atributo', component: AtributoComponent, pathMatch: 'full' },
  { path: 'atributo/novo', component: AtributoFormComponent},
  { path: 'atributo/:id_atributo', component: AtributoFormComponent}
];

export const atributoRouting = RouterModule.forChild(atributoRoutes);