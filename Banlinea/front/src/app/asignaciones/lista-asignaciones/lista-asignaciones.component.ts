import { Component, OnInit } from '@angular/core';
import {Asignacion} from '../asignacion.model';
import {Ruta} from '../../rutas/ruta.model';
import {Conductor} from '../../conductores/conductor.model';
import { ServiciosService } from '../../servicios.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-lista-asignaciones',
  templateUrl: './lista-asignaciones.component.html',
  styleUrls: ['./lista-asignaciones.component.scss']
})
export class ListaAsignacionesComponent implements OnInit {

  asignaciones : Asignacion [] ;
  rutas : Ruta [] ;
  conductores : Conductor[] ;
  asignacionesMostrar : Asignacion [] ;

  x1:string ;
  x2:string ;
  y1:string ;
  y2:string ;

  constructor(private service: ServiciosService)
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

   reload()
   {
     this.service.getAsignaciones().subscribe(ress3 => 
       {
         this.asignaciones=ress3;
         this.recargar();
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

   desasignar(asignacion)
   {
     this.service.desasignar(asignacion).subscribe(ress=>
     {
       alert("Has desasignado");
       this.reload();
     });
   }

   ver(x1,y1,x2,y2)
   {
    this.x1=x1;
    this.x2=x2;
    this.y1=y1;
    this.y2=y2;
    console.log("entra");
   }

  ngOnInit() {
  }

}
