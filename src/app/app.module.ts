import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy, registerLocaleData } from '@angular/common';
import localePtBR from '@angular/common/locales/pt';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { XHRBackend } from '@angular/http';
import { Http } from '@angular/http';
import { ToastrModule } from 'ngx-toastr';

// import { NgSpinningPreloader } from 'ng2-spinning-preloader';
import { NgxSpinnerModule } from 'ngx-spinner';
import { Ng2SelectizeModule } from 'ng2-selectize';
import { LoaderService } from 'app/shared/services/loader.service';
import { LoaderComponent } from './shared/components/loader.component';
import { httpFactory } from 'app/shared/services/http.factory';
import { MensagensHandler } from './shared/services/mensagens-handler.service';
import { TextMaskModule } from 'angular2-text-mask';
import { Select2Module } from 'ng2-select2';
import { DataTablesModule } from 'angular-datatables';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask/src/currency-mask.config';
import { ChartModule } from 'angular2-chartjs';

/* Modules */
import { AbrangenciaModule } from './abrangencia/abrangencia.module';
import { DivisaoModule } from './divisao/divisao.module';
import { ComplexidadeModule } from './complexidade/complexidade.module';
import { PapelModule } from './papel/papel.module';
import { TecnologiaModule } from './tecnologia/tecnologia.module';
import { ImpactoModule } from './impacto/impacto.module';
import { ReferenciaModule } from './referencia/referencia.module';
import { ColaboradorModule } from './colaborador/colaborador.module';
import { PesosModule } from './pesos/pesos.module';
import { ProjetoModule } from './projeto/projeto.module';
import { DistribuicaoModule } from './distribuicao/distribuicao.module';
import { AtributoModule } from './atributo/atributo.module';
import { AvaliacaoModule } from './avaliacao/avaliacao.module';
import { FaixaModule } from './faixa/faixa.module';
import { ConsultaavaliacaoModule } from './consultaavaliacao/consultaavaliacao.module';

/* Routes */
import { routing } from './app.routes';
import { divisaoRouting } from './divisao/divisao.routes';
import { complexidadeRouting } from './complexidade/complexidade.routes';
import { abrangenciaRouting } from './abrangencia/abrangencia.routes';
import { papelRouting } from './papel/papel.routes';
import { tecnologiaRouting } from './tecnologia/tecnologia.routes';
import { impactoRouting } from './impacto/impacto.routes';
import { referenciaRouting } from './referencia/referencia.routes';
import { colaboradorRouting } from './colaborador/colaborador.routes';
import { pesosRouting } from './pesos/pesos.routes';
import { projetoRouting } from './projeto/projeto.routes';
import { distribuicaoRouting } from './distribuicao/distribuicao.routes';
import { atributoRouting } from './atributo/atributo.routes';
import { avaliacaoRouting } from './avaliacao/avaliacao.routes';
import { faixaRouting } from './faixa/faixa.routes';
import { consultaavaliacaoRouting } from './consultaavaliacao/consultaavaliacao.routes';

/* Components */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from 'app/security/login/login.component';

import { MensagensComponent } from 'app/shared/components/mensagens.component';
import { ResetSenhaComponent } from './security/reset/reset.component';

import { LoginService } from 'app/security/login/login.service';
import { NotificationService } from 'app/shared/messages/notification.service';
import { LoggedInGuard } from 'app/shared/loggedin.guard';
import { SnackbarComponent } from './shared/messages/snackbar/snackbar.component';
import { RelatoriosComponent } from 'app/relatorios/relatorios.component';

// Setando a linguagem de portugues para o angular 5 
registerLocaleData(localePtBR);

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
    align: 'left',
    allowNegative: true,
    allowZero: true,
    decimal: '.',
    precision: 2,
    prefix: 'R$ ',
    suffix: '',
    thousands: ''
};

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        AboutComponent,
        LoginComponent,
        ResetSenhaComponent,
        LoaderComponent,
        MensagensComponent,
        SnackbarComponent,
        RelatoriosComponent

    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        DataTablesModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        TextMaskModule,
        ToastrModule.forRoot(), // ToastrModule added
        Select2Module,
        CurrencyMaskModule,
        Ng2SelectizeModule,
        NgxSpinnerModule,
        ChartModule,
        DivisaoModule,
        divisaoRouting,
        AbrangenciaModule,
        abrangenciaRouting,
        PapelModule,
        papelRouting,
        ComplexidadeModule,
        complexidadeRouting,
        ImpactoModule,
        impactoRouting,
        ReferenciaModule,
        referenciaRouting,
        TecnologiaModule,
        tecnologiaRouting,
        ColaboradorModule,
        colaboradorRouting,
        PesosModule,
        pesosRouting,
        ProjetoModule,
        projetoRouting,
        DistribuicaoModule,
        distribuicaoRouting,
        AtributoModule,
        atributoRouting,
        AvaliacaoModule,
        avaliacaoRouting,
        FaixaModule,
        faixaRouting,
        ConsultaavaliacaoModule,
        consultaavaliacaoRouting,
        routing
    ],
    providers:
        [
            { provide: LOCALE_ID, useValue: 'pt-PT' },
            { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig },
            { provide: Http, useFactory: httpFactory, deps: [XHRBackend, RequestOptions, LoaderService, MensagensHandler] },
            { provide: LocationStrategy, useClass: HashLocationStrategy} ,
            // NgSpinningPreloader,
            
            HttpClient,
            LoginService,
            NotificationService,
            LoggedInGuard
        ],
    bootstrap: [AppComponent]
})
export class AppModule { }
