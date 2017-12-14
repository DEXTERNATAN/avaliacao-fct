import { TecnologiaFormComponent } from './tecnologia-form/tecnologia-form.component';
import { Routes, RouterModule } from '@angular/router';

import { TecnologiaComponent	 } from './tecnologia.component';
import { LoggedInGuard } from 'app/shared/loggedin.guard';


const tecnologiaRoutes: Routes = [
	{ path: 'tecnologia', component: TecnologiaComponent, pathMatch: 'full', canLoad: [ LoggedInGuard ]  },
  	{ path: 'tecnologia/novo', component: TecnologiaFormComponent , canLoad: [ LoggedInGuard ] },
	{ path: 'tecnologia/:id_tecnologia', component: TecnologiaFormComponent , canLoad: [ LoggedInGuard ] }
];

export const tecnologiaRouting = RouterModule.forChild(tecnologiaRoutes);