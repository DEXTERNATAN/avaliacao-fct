import { DistribuicaoFormComponent } from './distribuicao-form/distribuicao-form.component';
import { Routes, RouterModule } from '@angular/router';

import { DistribuicaoComponent } from './distribuicao.component';
import { AuthGuard } from 'app/shared/auth.guard';

const distribuicaoRoutes: Routes = [
 { path: 'distribuicao', component: DistribuicaoComponent, pathMatch: 'full' , canActivate: [ AuthGuard ] },
  { path: 'distribuicao/novo', component: DistribuicaoFormComponent, canActivate: [ AuthGuard ] },
  { path: 'distribuicao/:id_distribuicao', component: DistribuicaoFormComponent, canActivate: [ AuthGuard ] }
];

export const distribuicaoRouting = RouterModule.forChild(distribuicaoRoutes);