import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarraSuperiorComponent } from '../barra-superior/barra-superior.component';
import { AutenticacionModule } from './autenticacion.module';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'autenticacion',
    component : LoginComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutenticacionRoutingModule { }
