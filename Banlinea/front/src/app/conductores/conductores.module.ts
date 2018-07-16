import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConductoresRoutingModule } from './conductores-routing.module';
import { ConductoresComponent } from './conductores/conductores.component';

@NgModule({
  imports: [
    CommonModule,
    ConductoresRoutingModule,
    FormsModule
  ],
  declarations: [ConductoresComponent]
})
export class ConductoresModule { }
