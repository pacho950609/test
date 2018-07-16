import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarraSuperiorComponent } from '../barra-superior/barra-superior.component';
import { RutasComponent } from './rutas/rutas.component';

const routes: Routes = 
[
  {
    path: 'home',
      component: BarraSuperiorComponent,
      children: 
      [
        {
            path: 'rutas',
            component : RutasComponent
        },
      ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RutasRoutingModule { }
