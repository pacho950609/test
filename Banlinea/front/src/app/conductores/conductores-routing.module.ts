import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarraSuperiorComponent } from '../barra-superior/barra-superior.component';
import { ConductoresComponent } from './conductores/conductores.component';

const routes: Routes = [
  {
    path: 'home',
    component: BarraSuperiorComponent,
    children: 
    [
      {
          path: 'conductores',
          component : ConductoresComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConductoresRoutingModule { }
