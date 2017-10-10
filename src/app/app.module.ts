import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
import { DetailRestaurantComponent } from './detail-restaurant/detail-restaurant.component';
//import { ComplexidadeFormComponent } from './complexidade/src/app/complexidade-form/complexidade-form.component';


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
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
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
    routing
    //RouterModule.forRoot(routing)
  ],
  providers: [ RestaurantsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
