import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

/**
 * modulo para comuniacion con el api
 */
import { HttpClientModule } from '@angular/common/http';

/**
 * modulo para la paginacion
 */
import { NgxPaginationModule } from 'ngx-pagination';

/**
 * modulos para el buscador
 */
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

/**
 * aca se importa el modulo de paginacion para los datos
 * aca se importa el modulo de http para que se pueda conectar con el api
 * aca se importa el modulo para implementar el buscador
 */
@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
