import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../servicios.service';
import {Registro} from '../../registros/registro.model';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.scss']
})
export class RegistrosComponent implements OnInit {

  registros : Registro [] ;

  constructor(private service: ServiciosService) 
  {
    this.service.getRegistros().subscribe(ress => 
      {
        console.log(ress);
        this.registros=ress;
      });
  }

  ngOnInit() {
  }

}
