import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    AutenticacionRoutingModule,
    FormsModule
  ],
  declarations: [LoginComponent]
})
export class AutenticacionModule { }
