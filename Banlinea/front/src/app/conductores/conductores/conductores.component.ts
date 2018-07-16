import { Component, OnInit } from '@angular/core';
import { Conductor } from '../conductor.model';
import { ServiciosService } from '../../servicios.service';


@Component({
  selector: 'app-conductores',
  templateUrl: './conductores.component.html',
  styleUrls: ['./conductores.component.scss']
})
export class ConductoresComponent implements OnInit {

  conductores : Conductor [] ;
  nombre : string ;
  apellido : string ;
  tipo : string ;
  numero: string ; 

  constructor(private service: ServiciosService) 
  {
    this.service.getConductores().subscribe(ress => 
      {
        this.conductores=ress;
      });
  }

  modificar(nombre, apellido , tipo ,numero)
  {
    this.service.putConductor(nombre,apellido,tipo,numero).subscribe(ress => 
      {
        alert("Modificado correctamente");
        this.service.getConductores().subscribe(ress => 
          {
            this.conductores=ress;
          });
      });
  }
  
  eliminar(id)
  {
    console.log("entra");
    this.service.deleteConductor(id).subscribe(ress => 
      {
        alert("Eliminado correctamente");
        this.service.getConductores().subscribe(ress => 
          {
            this.conductores=ress;
          });
      });
  }


  agregar()
  {
    this.service.createConductor(this.nombre,this.apellido,this.tipo,this.numero).subscribe(ress => 
      {
        console.log(ress);
        if(ress['insertedCount']==undefined)
        {
          alert(ress);
        }
        else
        {
          alert("Agregado correctamente");
        }
        
        this.service.getConductores().subscribe(ress => 
          {
            this.nombre="";
            this.apellido="";
            this.tipo = "" ;
            this.numero = "" ;
            this.conductores=ress;
            
          });
      });

  }

  ngOnInit() {
  }

}
