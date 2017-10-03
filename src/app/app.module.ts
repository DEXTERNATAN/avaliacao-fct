import { impactoRouting } from './impacto/impacto.routes';
import { ImpactoModule } from './impacto/impacto.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* Modules */
import { AbrangenciaModule } from 'app/abrangencia/abrangencia.module';
import { DivisaoModule } from './divisao/divisao.module';
import { ComplexidadeModule } from './complexidade/complexidade.module';
import { PapelModule } from './papel/papel.module';

/* Routes */
import { routing } from './app.routes';
import { divisaoRouting } from './divisao/divisao.routes';
import { complexidadeRouting } from './complexidade/complexidade.routes';
import { abrangenciaRouting } from './abrangencia/abrangencia.routes';
import { papelRouting } from './papel/papel.routes';

/* Services */
import { RestaurantsService } from './restaurants/restaurants.service';
import { DivisaoService } from './divisao/divisao.service';
import { AbrangenciaService } from './abrangencia/abrangencia.service';
import { PapelService } from './papel/papel.service';

/* Components */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from 'app/restaurants/restaurant/restaurant.component';
import { LoginComponent } from './login/login.component';
import { DivisaoComponent } from './divisao/divisao.component';
import { PapelComponent } from './papel/papel.component';
import { AbrangenciaComponent } from './abrangencia/abrangencia.component';
import { ImpactoComponent } from './impacto/impacto.component';
import { ComplexidadeComponent } from './complexidade/complexidade.component';
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
    routing
    //RouterModule.forRoot(routing)
  ],
  providers: [ RestaurantsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
