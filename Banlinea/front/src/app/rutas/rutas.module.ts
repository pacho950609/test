import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RutasRoutingModule } from './rutas-routing.module';
import { RutasComponent } from './rutas/rutas.component';

@NgModule({
  imports: [
    CommonModule,
    RutasRoutingModule,
    FormsModule
  ],
  declarations: [RutasComponent]
})
export class RutasModule { }
