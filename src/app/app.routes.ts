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
import { LoginComponent } from './security/login/login.component';
import { LoggedInGuard } from 'app/shared/loggedin.guard';
import { RelatoriosComponent } from 'app/relatorios/relatorios.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent , canActivate: [ LoggedInGuard] , canLoad: [ LoggedInGuard] },
    { path: 'relatorios', component: RelatoriosComponent , canActivate: [ LoggedInGuard] , canLoad: [ LoggedInGuard] },
    { path: '', component: LoginComponent },
    { path: 'about', component: AboutComponent, canLoad: [ LoggedInGuard]  , canActivate: [ LoggedInGuard]},
    { path: 'papel', component: PapelComponent, canLoad: [ LoggedInGuard]  , canActivate: [ LoggedInGuard]},
    { path: 'abrangencia', component: AbrangenciaComponent, canLoad: [ LoggedInGuard]  , canActivate: [ LoggedInGuard] },
    { path: 'complexidade', component: ComplexidadeComponent, canLoad: [ LoggedInGuard]  , canActivate: [ LoggedInGuard] },
    { path: 'referencia', component: ReferenciaComponent, canLoad: [ LoggedInGuard]  , canActivate: [ LoggedInGuard] },
    { path: 'tecnologia', component: TecnologiaComponent, canLoad: [ LoggedInGuard]  , canActivate: [ LoggedInGuard] },
    { path: 'colaborador', component: ColaboradorComponent, canLoad: [ LoggedInGuard]  , canActivate: [ LoggedInGuard] },
    { path: 'impacto', component: ImpactoComponent, canLoad: [ LoggedInGuard]  , canActivate: [ LoggedInGuard] },
    { path: 'pesos', component: PesosComponent, canLoad: [ LoggedInGuard]  , canActivate: [ LoggedInGuard] },
    { path: 'projeto', component: ProjetoComponent, canLoad: [ LoggedInGuard]  , canActivate: [ LoggedInGuard] },
    { path: 'distribuicao', component: DistribuicaoComponent, canLoad: [ LoggedInGuard]  , canActivate: [ LoggedInGuard] },
    { path: 'atributo', component: AtributoComponent, canLoad: [ LoggedInGuard]  , canActivate: [ LoggedInGuard] },
    { path: 'avaliacao', component: AvaliacaoComponent, canLoad: [ LoggedInGuard]  , canActivate: [ LoggedInGuard] },
    { path: 'faixa', component: FaixaComponent, canLoad: [ LoggedInGuard]  , canActivate: [ LoggedInGuard] },
    { path: 'consultaavaliacao', component: ConsultaavaliacaoComponent, canLoad: [ LoggedInGuard]  , canActivate: [ LoggedInGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
