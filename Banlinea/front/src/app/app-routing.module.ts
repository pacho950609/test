import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './autenticacion/login/login.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';

const routes: Routes = [
  {path: '', redirectTo: '/autenticacion', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
