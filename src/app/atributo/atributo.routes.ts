import { AtributoFormComponent } from './atributo-form/atributo-form.component';
import { Routes, RouterModule } from '@angular/router';
import { AtributoComponent } from './atributo.component';
import { LoggedInGuard } from 'app/shared/loggedin.guard';

const atributoRoutes: Routes = [
 { path: 'atributo', component: AtributoComponent, pathMatch: 'full' , canLoad: [ LoggedInGuard]  , canActivate: [ LoggedInGuard] },
  { path: 'atributo/novo', component: AtributoFormComponent, canLoad: [ LoggedInGuard]  , canActivate: [ LoggedInGuard] },
  { path: 'atributo/:id_atributo', component: AtributoFormComponent, canLoad: [ LoggedInGuard]  , canActivate: [ LoggedInGuard] }
];

export const atributoRouting = RouterModule.forChild(atributoRoutes);