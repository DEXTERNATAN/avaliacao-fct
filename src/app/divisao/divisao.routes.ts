import { DivisaoFormComponent } from './divisao-form/divisao-form.component';
import { Routes, RouterModule } from '@angular/router';

import { DivisaoComponent } from './divisao.component';

const divisaoRoutes: Routes = [
 { path: 'divisao', component: DivisaoComponent, pathMatch: 'full' },
  { path: 'divisao/novo', component: DivisaoFormComponent},
  { path: 'divisao/:id', component: DivisaoFormComponent}
];

export const divisaoRouting = RouterModule.forChild(divisaoRoutes);