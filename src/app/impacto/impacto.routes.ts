import { Routes, RouterModule } from '@angular/router';

import { ImpactoComponent } from './impacto.component';
//import { ImpactoFormComponent } from './impacto-form/impacto-form.component';


const impactoRoutes: Routes = [
 { path: 'divisao', component: ImpactoComponent, pathMatch: 'full' }
  //{ path: 'impacto/novo', component: ImpactoFormComponent},
  //{ path: 'impacto/:id', component: ImpactoFormComponent}
];

export const impactoRouting = RouterModule.forChild(impactoRoutes);