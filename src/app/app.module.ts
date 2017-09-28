import { DivisaoModule } from './divisao/divisao.module';
import { divisaoRouting } from './divisao/divisao.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* Routes */
import { routing } from './app.routes';

/* Services */
import { RestaurantsService } from './restaurants/restaurants.service';
import { DivisaoService } from './divisao/divisao.service';
import { DetailRestaurantComponent } from './detail-restaurant/detail-restaurant.component';

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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    LoginComponent,
    //DivisaoComponent,
    DetailRestaurantComponent,
    PapelComponent,
    AbrangenciaComponent,
    ComplexidadeComponent,
    ImpactoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    DivisaoModule,
    divisaoRouting,
    routing
    //RouterModule.forRoot(routing)
  ],
  providers: [ RestaurantsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
