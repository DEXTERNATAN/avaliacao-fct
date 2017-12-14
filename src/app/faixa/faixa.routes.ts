import { FaixaFormComponent } from './faixa-form/faixa-form.component';
import { Routes, RouterModule } from '@angular/router';

import { FaixaComponent } from './faixa.component';
import { LoggedInGuard } from 'app/shared/loggedin.guard';


const faixaRoutes: Routes = [
 { path: 'faixa', component: FaixaComponent, pathMatch: 'full', canLoad: [ LoggedInGuard ]  },
 { path: 'faixa/novo', component: FaixaFormComponent, canLoad: [ LoggedInGuard ] }
  //{ path: 'faixa/:id_faixa', component: FaixaFormComponent}
];

export const faixaRouting = RouterModule.forChild(faixaRoutes);