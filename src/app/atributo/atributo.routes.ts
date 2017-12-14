import { AtributoFormComponent } from './atributo-form/atributo-form.component';
import { Routes, RouterModule } from '@angular/router';

import { AtributoComponent } from './atributo.component';
import { LoggedInGuard } from 'app/shared/loggedin.guard';


const atributoRoutes: Routes = [
 { path: 'atributo', component: AtributoComponent, pathMatch: 'full' , canLoad: [ LoggedInGuard ] },
  { path: 'atributo/novo', component: AtributoFormComponent, canLoad: [ LoggedInGuard ] },
  { path: 'atributo/:id_atributo', component: AtributoFormComponent, canLoad: [ LoggedInGuard ] }
];

export const atributoRouting = RouterModule.forChild(atributoRoutes);