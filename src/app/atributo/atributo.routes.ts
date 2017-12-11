import { AtributoFormComponent } from './atributo-form/atributo-form.component';
import { Routes, RouterModule } from '@angular/router';

import { AtributoComponent } from './atributo.component';
import { AuthGuard } from 'app/shared/auth.guard';

const atributoRoutes: Routes = [
 { path: 'atributo', component: AtributoComponent, pathMatch: 'full' , canActivate: [ AuthGuard ] },
  { path: 'atributo/novo', component: AtributoFormComponent, canActivate: [ AuthGuard ] },
  { path: 'atributo/:id_atributo', component: AtributoFormComponent, canActivate: [ AuthGuard ] }
];

export const atributoRouting = RouterModule.forChild(atributoRoutes);