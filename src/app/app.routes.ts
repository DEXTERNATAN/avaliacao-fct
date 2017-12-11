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
import { LoginComponent } from './login/login.component';
import { AuthGuard } from 'app/shared/auth.guard';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [ AuthGuard ] },
    { path: 'login', component: LoginComponent },
    { path: 'about', component: AboutComponent },
    { path: 'papel', component: PapelComponent, canActivate: [ AuthGuard ]},
    { path: 'abrangencia', component: AbrangenciaComponent, canActivate: [ AuthGuard ]},
    { path: 'complexidade', component: ComplexidadeComponent , canActivate: [ AuthGuard ]},
    { path: 'referencia', component: ReferenciaComponent , canActivate: [ AuthGuard ]},
    { path: 'tecnologia', component: TecnologiaComponent , canActivate: [ AuthGuard ]},
    { path: 'colaborador', component: ColaboradorComponent , canActivate: [ AuthGuard ]},
    { path: 'impacto', component: ImpactoComponent , canActivate: [ AuthGuard ]},
    { path: 'pesos', component: PesosComponent , canActivate: [ AuthGuard ]},
    { path: 'projeto', component: ProjetoComponent , canActivate: [ AuthGuard ]},
    { path: 'distribuicao', component: DistribuicaoComponent , canActivate: [ AuthGuard ]},
    { path: 'atributo', component: AtributoComponent , canActivate: [ AuthGuard ]},
    { path: 'avaliacao', component: AvaliacaoComponent , canActivate: [ AuthGuard ]},
    { path: 'faixa', component: FaixaComponent , canActivate: [ AuthGuard ]},
    { path: 'consultaavaliacao', component: ConsultaavaliacaoComponent , canActivate: [ AuthGuard ]},

    // otherwise redirect to home
    { path: '**', redirectTo: '', canActivate: [ AuthGuard ] }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
