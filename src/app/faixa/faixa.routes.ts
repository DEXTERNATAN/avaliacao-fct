import { FaixaFormComponent } from './faixa-form/faixa-form.component';
import { Routes, RouterModule } from '@angular/router';

import { FaixaComponent } from './faixa.component';
import { AuthGuard } from 'app/shared/auth.guard';

const faixaRoutes: Routes = [
 { path: 'faixa', component: FaixaComponent, pathMatch: 'full', canActivate: [ AuthGuard ]  },
 { path: 'faixa/novo', component: FaixaFormComponent, canActivate: [ AuthGuard ] }
  //{ path: 'faixa/:id_faixa', component: FaixaFormComponent}
];

export const faixaRouting = RouterModule.forChild(faixaRoutes);