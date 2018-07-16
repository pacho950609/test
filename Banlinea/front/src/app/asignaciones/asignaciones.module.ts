import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AsignacionesRoutingModule } from './asignaciones-routing.module';
import { AsignacionesComponent } from './asignaciones/asignaciones.component';
import { AgmCoreModule } from '@agm/core';
import { MapsComponent } from './maps/maps.component';
import { ListaAsignacionesComponent } from './lista-asignaciones/lista-asignaciones.component';

@NgModule({
  imports: [
    CommonModule,
    AsignacionesRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA2Mvlh5R8YU-yCyt8uQdX0pCYEyMaimoM'
    })
  ],
  declarations: [AsignacionesComponent, MapsComponent, ListaAsignacionesComponent]
})
export class AsignacionesModule { }
