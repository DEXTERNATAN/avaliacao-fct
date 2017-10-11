import { ComplexidadeFormComponent } from './complexidade-form/complexidade-form.component';
import { Routes, RouterModule } from '@angular/router';

import { ComplexidadeComponent } from './complexidade.component';

const complexidadeRoutes: Routes = [
	{ path: 'complexidade', component: ComplexidadeComponent, pathMatch: 'full' },
	{ path: 'complexidade/novo', component: ComplexidadeFormComponent },
	{ path: 'complexidade/:id_complexidade', component: ComplexidadeFormComponent }
];

export const complexidadeRouting = RouterModule.forChild(complexidadeRoutes);