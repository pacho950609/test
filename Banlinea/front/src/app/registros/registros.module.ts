import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegistrosRoutingModule } from './registros-routing.module';
import { RegistrosComponent } from './registros/registros.component';

@NgModule({
  imports: [
    CommonModule,
    RegistrosRoutingModule,
    FormsModule
  ],
  declarations: [RegistrosComponent]
})
export class RegistrosModule { }
