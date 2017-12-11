import { TecnologiaFormComponent } from './tecnologia-form/tecnologia-form.component';
import { Routes, RouterModule } from '@angular/router';

import { TecnologiaComponent	 } from './tecnologia.component';
import { AuthGuard } from 'app/shared/auth.guard';

const tecnologiaRoutes: Routes = [
	{ path: 'tecnologia', component: TecnologiaComponent, pathMatch: 'full', canActivate: [ AuthGuard ]  },
  	{ path: 'tecnologia/novo', component: TecnologiaFormComponent , canActivate: [ AuthGuard ] },
	{ path: 'tecnologia/:id_tecnologia', component: TecnologiaFormComponent , canActivate: [ AuthGuard ] }
];

export const tecnologiaRouting = RouterModule.forChild(tecnologiaRoutes);