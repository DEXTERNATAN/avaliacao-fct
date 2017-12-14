import { PapelFormComponent } from './papel-form/papel-form.component';
import { Routes, RouterModule } from '@angular/router';

import { PapelComponent	 } from './papel.component';
import { LoggedInGuard } from 'app/shared/loggedin.guard';


const papelRoutes: Routes = [
	{ path: 'papel', component: PapelComponent, pathMatch: 'full', canLoad: [ LoggedInGuard ]  },
  	{ path: 'papel/novo', component: PapelFormComponent, canLoad: [ LoggedInGuard ]  },
	{ path: 'papel/:id_papel', component: PapelFormComponent, canLoad: [ LoggedInGuard ]  }
];

export const papelRouting = RouterModule.forChild(papelRoutes);