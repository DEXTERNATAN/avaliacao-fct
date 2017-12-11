import { PapelFormComponent } from './papel-form/papel-form.component';
import { Routes, RouterModule } from '@angular/router';

import { PapelComponent	 } from './papel.component';
import { AuthGuard } from 'app/shared/auth.guard';

const papelRoutes: Routes = [
	{ path: 'papel', component: PapelComponent, pathMatch: 'full', canActivate: [ AuthGuard ]  },
  	{ path: 'papel/novo', component: PapelFormComponent, canActivate: [ AuthGuard ]  },
	{ path: 'papel/:id_papel', component: PapelFormComponent, canActivate: [ AuthGuard ]  }
];

export const papelRouting = RouterModule.forChild(papelRoutes);