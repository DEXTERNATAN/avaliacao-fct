import { ComplexidadeFormComponent } from './complexidade-form/complexidade-form.component';
import { Routes, RouterModule } from '@angular/router';

import { ComplexidadeComponent } from './complexidade.component';
import { LoggedInGuard } from 'app/shared/loggedin.guard';

const complexidadeRoutes: Routes = [
	{ path: 'complexidade', component: ComplexidadeComponent, pathMatch: 'full' , canLoad: [ LoggedInGuard ] },
	{ path: 'complexidade/novo', component: ComplexidadeFormComponent , canLoad: [ LoggedInGuard ] },
	{ path: 'complexidade/:id_complexidade', component: ComplexidadeFormComponent, canLoad: [ LoggedInGuard ]  }
];

export const complexidadeRouting = RouterModule.forChild(complexidadeRoutes);