import { TelPipe } from './shared/custom-pipes.pipes';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TextMaskModule } from 'angular2-text-mask';
import { DataTablesModule } from 'angular-datatables';
import { LOCALE_ID } from '@angular/core';

import { CurrencyPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from "ng2-currency-mask/src/currency-mask.config";

import {CalendarModule} from 'primeng/primeng';

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


/* Services */
import { RestaurantsService } from './restaurants/restaurants.service';
import { DivisaoService } from './divisao/divisao.service';
import { AbrangenciaService } from './abrangencia/abrangencia.service';
import { PapelService } from './papel/papel.service';
import { TecnologiaService } from './tecnologia/tecnologia.service';
import { ImpactoService } from './impacto/impacto.service';
import { ReferenciaService } from './referencia/referencia.service';
import { ColaboradorService } from './colaborador/colaborador.service';
import { PesosService } from './pesos/pesos.service';
import { ProjetoService } from './projeto/projeto.service';
import { DistribuicaoService } from './distribuicao/distribuicao.service';
import { AtributoService } from './atributo/atributo.service';
import { AvaliacaoService } from './avaliacao/avaliacao.service';
import { FaixaService } from './faixa/faixa.service';
import { ConsultaavaliacaoService } from './consultaavaliacao/consultaavaliacao.service';

/* Components */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { LoginComponent } from './login/login.component';
import { DivisaoComponent } from './divisao/divisao.component';
import { PapelComponent } from './papel/papel.component';
import { AbrangenciaComponent } from './abrangencia/abrangencia.component';
import { ImpactoComponent } from './impacto/impacto.component';
import { ComplexidadeComponent } from './complexidade/complexidade.component';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';
import { ReferenciaComponent } from './referencia/referencia.component';
import { ColaboradorComponent } from './colaborador/colaborador.component';
import { PesosComponent } from './pesos/pesos.component';
import { ProjetoComponent } from './projeto/projeto.component';
import { DistribuicaoComponent } from './distribuicao/distribuicao.component';
import { AtributoComponent } from './atributo/atributo.component';
import { DetailRestaurantComponent } from './detail-restaurant/detail-restaurant.component';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';
import { FaixaComponent } from './faixa/faixa.component';
import { ConsultaavaliacaoComponent } from './consultaavaliacao/consultaavaliacao.component';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "left",
  allowNegative: true,
  allowZero: true,
  decimal: ".",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: ""
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    LoginComponent,
    DetailRestaurantComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    TextMaskModule,
    CurrencyMaskModule,
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
      RestaurantsService, 
      {provide: LOCALE_ID, useValue: 'pt-BR'}, 
      { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
