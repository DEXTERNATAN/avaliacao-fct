import { DistribuicaoFormComponent } from './distribuicao-form/distribuicao-form.component';
import { Routes, RouterModule } from '@angular/router';

import { DistribuicaoComponent } from './distribuicao.component';

const distribuicaoRoutes: Routes = [
 { path: 'distribuicao', component: DistribuicaoComponent, pathMatch: 'full' },
  { path: 'distribuicao/novo', component: DistribuicaoFormComponent},
  { path: 'distribuicao/:id', component: DistribuicaoFormComponent}
];

export const distribuicaoRouting = RouterModule.forChild(distribuicaoRoutes);