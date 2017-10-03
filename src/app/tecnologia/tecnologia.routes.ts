import { TecnologiaFormComponent } from './tecnologia-form/tecnologia-form.component';
import { Routes, RouterModule } from '@angular/router';

import { TecnologiaComponent	 } from './tecnologia.component';

const tecnologiaRoutes: Routes = [
	{ path: 'tecnologia', component: TecnologiaComponent, pathMatch: 'full' },
  	{ path: 'tecnologia/novo', component: TecnologiaFormComponent },
	{ path: 'tecnologia/:id', component: TecnologiaFormComponent }
];

export const tecnologiaRouting = RouterModule.forChild(tecnologiaRoutes);