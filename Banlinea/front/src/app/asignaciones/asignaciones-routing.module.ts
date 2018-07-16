import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarraSuperiorComponent } from '../barra-superior/barra-superior.component';
import { AsignacionesComponent } from './asignaciones/asignaciones.component';
import { ListaAsignacionesComponent } from './lista-asignaciones/lista-asignaciones.component';

const routes: Routes = [
  {
    path: 'home',
    component: BarraSuperiorComponent,
    children: 
    [
      {
          path: 'asignaciones',
          component : AsignacionesComponent
      },
      {
        path: 'listaAsignaciones',
        component : ListaAsignacionesComponent
    },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsignacionesRoutingModule { }
