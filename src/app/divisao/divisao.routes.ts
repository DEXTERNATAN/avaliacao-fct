import { DivisaoFormComponent } from './divisao-form/divisao-form.component';
import { Routes, RouterModule } from '@angular/router';

import { DivisaoComponent } from './divisao.component';
import { LoggedInGuard } from 'app/shared/loggedin.guard';


const divisaoRoutes: Routes = [
 { path: 'divisao', component: DivisaoComponent, pathMatch: 'full' , canLoad: [ LoggedInGuard ] },
  { path: 'divisao/novo', component: DivisaoFormComponent, canLoad: [ LoggedInGuard ] },
  { path: 'divisao/:id_divisao', component: DivisaoFormComponent, canLoad: [ LoggedInGuard ] }
];

export const divisaoRouting = RouterModule.forChild(divisaoRoutes);