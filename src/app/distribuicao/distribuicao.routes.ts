import { DistribuicaoFormComponent } from './distribuicao-form/distribuicao-form.component';
import { Routes, RouterModule } from '@angular/router';

import { DistribuicaoComponent } from './distribuicao.component';
import { LoggedInGuard } from 'app/shared/loggedin.guard';

const distribuicaoRoutes: Routes = [
 { path: 'distribuicao', component: DistribuicaoComponent, pathMatch: 'full' , canLoad: [ LoggedInGuard]  , canActivate: [ LoggedInGuard] },
  { path: 'distribuicao/novo', component: DistribuicaoFormComponent, canLoad: [ LoggedInGuard]  , canActivate: [ LoggedInGuard] },
  { path: 'distribuicao/:id_distribuicao', component: DistribuicaoFormComponent,
  canLoad: [ LoggedInGuard]  , canActivate: [ LoggedInGuard] }
];

export const distribuicaoRouting = RouterModule.forChild(distribuicaoRoutes);