import { DivisaoComponent } from './divisao/divisao.component';
import { ImpactoComponent } from './impacto/impacto.component';
import { ComplexidadeComponent } from './complexidade/complexidade.component';
import { AbrangenciaComponent } from './abrangencia/abrangencia.component';
import { PapelComponent } from './papel/papel.component';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';
import { ReferenciaComponent } from './referencia/referencia.component';
import { ColaboradorComponent } from './colaborador/colaborador.component';
import { PesosComponent } from './pesos/pesos.component';
import { ProjetoComponent } from './projeto/projeto.component';
import { DistribuicaoComponent } from './distribuicao/distribuicao.component';
import { AtributoComponent } from './atributo/atributo.component';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';
import { FaixaComponent } from './faixa/faixa.component';
import { ConsultaavaliacaoComponent } from './consultaavaliacao/consultaavaliacao.component';

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
//import { LoginComponent } from 'app/login/login.component';
import { LoginComponent } from './login/login.component';

    
const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: HomeComponent },
    { path: 'restaurants', component: RestaurantsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'papel', component: PapelComponent },
    { path: 'abrangencia', component: AbrangenciaComponent },
    { path: 'complexidade', component: ComplexidadeComponent },
    { path: 'referencia', component: ReferenciaComponent },
    { path: 'tecnologia', component: TecnologiaComponent },
    { path: 'colaborador', component: ColaboradorComponent },
    { path: 'impacto', component: ImpactoComponent },
    { path: 'pesos', component: PesosComponent },
    { path: 'projeto', component: ProjetoComponent },
    { path: 'distribuicao', component: DistribuicaoComponent },
    { path: 'atributo', component: AtributoComponent },
    { path: 'avaliacao', component: AvaliacaoComponent },
    { path: 'faixa', component: FaixaComponent },
    { path: 'consultaavaliacao', component: ConsultaavaliacaoComponent }
]
  
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
