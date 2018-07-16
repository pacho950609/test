import { Component, OnInit } from '@angular/core';
import {Asignacion} from '../asignacion.model';
import { Router } from '@angular/router';
import {Ruta} from '../../rutas/ruta.model';
import {Conductor} from '../../conductores/conductor.model';
import { ServiciosService } from '../../servicios.service';
import { forEach } from '@angular/router/src/utils/collection';
 
@Component({
  selector: 'app-asignaciones',
  templateUrl: './asignaciones.component.html',
  styleUrls: ['./asignaciones.component.scss']
})
export class AsignacionesComponent implements OnInit {

  asignaciones : Asignacion [] ;
  rutas : Ruta [] ;
  conductores : Conductor[] ;
  asignacionesMostrar : Asignacion [] ;

  tipoDocumento : string ;
  numeroDocumento : string ; 
  placas : string ; 
  empresa : string ; 
  pasajero : string ; 
  rutaID : string ;
  conductorID : string ;


  constructor(private service: ServiciosService, private router : Router) 
  {
    this.service.getConductores().subscribe(ress => 
      {
        this.conductores=ress;
        this.service.getRutas().subscribe(ress2 => 
          {
            this.rutas=ress2;
            this.service.getAsignaciones().subscribe(ress3 => 
              {
                this.asignaciones=ress3;
                this.recargar();
              });
          });
      });
  }

  recargar()
  {
    this.asignaciones.forEach(asignacion =>
      {
        this.rutas.forEach(ruta =>
          {
              if(ruta._id==asignacion.rutaID)
              {
                asignacion.ruta=ruta;
              }
          });
        this.conductores.forEach(conductor =>
          {
            if(conductor._id==asignacion.conductorID)
            {
              asignacion.conductor=conductor;
            }

          });
      });
      this.asignacionesMostrar= new Array();
      this.asignaciones.forEach(asignacion =>
        {
            if(asignacion.estado=='asignado')
            {
              this.asignacionesMostrar.push(asignacion);
            }
        })
  }

 
  asignar(mapa1,mapa2)
  {
    if(mapa1.lat != undefined && mapa2.lat !=undefined)
    {
      this.rutaID="a";
      this.conductorID="b";
      this.rutas.forEach( ruta =>
      {
        if(ruta.placas==this.placas)
        {
          this.rutaID = ruta._id;
        }
 
      });
      this.conductores.forEach( conductor =>
        {
          if(conductor.tipoDocumento==this.tipoDocumento && conductor.numeroDocumento == this.numeroDocumento)
          {
            this.conductorID = conductor._id;
          }
    
        });

      this.service.asignar(this.conductorID,this.rutaID,mapa1.lat,mapa1.lng,mapa2.lat,mapa2.lng,this.pasajero,this.empresa).subscribe(ress=>
        {
          if(ress['insertedCount']==undefined)
          {
            alert(ress);
          }
          else
          {
            alert("Agregado correctamente");
            this.router.navigate(['/home/listaAsignaciones']);
          }
      })
    }
    else{
      alert("No ha seleccionado los puntos de origen o destino");
    }
  }


  ngOnInit() {
  }

}
