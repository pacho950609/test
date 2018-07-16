import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AutenticacionModule } from './autenticacion/autenticacion.module';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { HttpClientModule } from '@angular/common/http';
import { ServiciosService } from './servicios.service';
import { ConductoresModule } from './conductores/conductores.module';
import { RutasModule } from './rutas/rutas.module';
import { AsignacionesModule } from './asignaciones/asignaciones.module';
import { RegistrosModule } from './registros/registros.module';


@NgModule({
  declarations: [
    AppComponent,
    BarraSuperiorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutenticacionModule,
    HttpClientModule,
    ConductoresModule,
    RutasModule,
    AsignacionesModule,
    RegistrosModule,
  ],
  providers: [ServiciosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
