import { FaixaFormComponent } from './faixa-form/faixa-form.component';
import { Routes, RouterModule } from '@angular/router';

import { FaixaComponent } from './faixa.component';

const faixaRoutes: Routes = [
 { path: 'faixa', component: FaixaComponent, pathMatch: 'full' },
 { path: 'faixa/novo', component: FaixaFormComponent}
  //{ path: 'faixa/:id_faixa', component: FaixaFormComponent}
];

export const faixaRouting = RouterModule.forChild(faixaRoutes);