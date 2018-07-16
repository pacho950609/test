import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarraSuperiorComponent } from '../barra-superior/barra-superior.component';
import { RegistrosComponent } from './registros/registros.component';

const routes: Routes = 
[
  {
    path: 'home',
    component: BarraSuperiorComponent,
    children: 
    [
      {
          path: 'registros',
          component : RegistrosComponent
      },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrosRoutingModule { }
