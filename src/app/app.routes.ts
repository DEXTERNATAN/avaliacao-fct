import { DivisaoComponent } from './divisao/divisao.component';
import { ImpactoComponent } from './impacto/impacto.component';
import { ComplexidadeComponent } from './complexidade/complexidade.component';
import { AbrangenciaComponent } from './abrangencia/abrangencia.component';
import { PapelComponent } from './papel/papel.component';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { LoginComponent } from 'app/login/login.component';


    
const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent },
    { path: 'restaurants', component: RestaurantsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'papel', component: PapelComponent },
    { path: 'abrangencia', component: AbrangenciaComponent },
    { path: 'complexidade', component: ComplexidadeComponent },
    { path: 'tecnologia', component: TecnologiaComponent },
    { path: 'impacto', component: ImpactoComponent }
]
  
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
