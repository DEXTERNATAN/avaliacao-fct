import { PapelFormComponent } from './papel-form/papel-form.component';
import { Routes, RouterModule } from '@angular/router';

import { PapelComponent	 } from './papel.component';

const papelRoutes: Routes = [
	{ path: 'papel', component: PapelComponent, pathMatch: 'full' },
  	{ path: 'papel/novo', component: PapelFormComponent },
	{ path: 'papel/:id_papel', component: PapelFormComponent }
];

export const papelRouting = RouterModule.forChild(papelRoutes);