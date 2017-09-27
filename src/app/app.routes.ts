import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { LoginComponent } from 'app/login/login.component';
import { DivisaoComponent } from './divisao/divisao.component';
    
const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent },
    { path: 'restaurants', component: RestaurantsComponent },
    { path: 'about', component: AboutComponent },
]
  
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
