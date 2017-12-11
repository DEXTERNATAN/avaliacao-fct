import { ComplexidadeFormComponent } from './complexidade-form/complexidade-form.component';
import { Routes, RouterModule } from '@angular/router';

import { ComplexidadeComponent } from './complexidade.component';
import { AuthGuard } from 'app/shared/auth.guard';

const complexidadeRoutes: Routes = [
	{ path: 'complexidade', component: ComplexidadeComponent, pathMatch: 'full' , canActivate: [ AuthGuard ] },
	{ path: 'complexidade/novo', component: ComplexidadeFormComponent , canActivate: [ AuthGuard ] },
	{ path: 'complexidade/:id_complexidade', component: ComplexidadeFormComponent, canActivate: [ AuthGuard ]  }
];

export const complexidadeRouting = RouterModule.forChild(complexidadeRoutes);