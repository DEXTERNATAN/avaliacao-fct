import { DivisaoFormComponent } from './divisao-form/divisao-form.component';
import { Routes, RouterModule } from '@angular/router';

import { DivisaoComponent } from './divisao.component';
import { AuthGuard } from 'app/shared/auth.guard';

const divisaoRoutes: Routes = [
 { path: 'divisao', component: DivisaoComponent, pathMatch: 'full' , canActivate: [ AuthGuard ] },
  { path: 'divisao/novo', component: DivisaoFormComponent, canActivate: [ AuthGuard ] },
  { path: 'divisao/:id_divisao', component: DivisaoFormComponent, canActivate: [ AuthGuard ] }
];

export const divisaoRouting = RouterModule.forChild(divisaoRoutes);