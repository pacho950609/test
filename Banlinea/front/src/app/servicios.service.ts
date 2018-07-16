import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Conductor } from './conductores/conductor.model';
import { Ruta } from './rutas/ruta.model';
import { Asignacion } from './asignaciones/asignacion.model';
import { Registro } from './registros/registro.model';



@Injectable()
export class ServiciosService {

  URL: string ;

  constructor(private http : HttpClient) 
  {
  
  }

  islog()
  {
    return this.http.get('/api/success');
  }

  Login(userName, Password)
  {
    var x =
    {
      "username": userName,
      "password": Password
    }
    return this.http.post('/api/log',x);
  }

  getConductores()
  {
    return this.http.get<Conductor[]>('/api/conductor');
  }
  putConductor(nombre , apellido , tipo , numero)
  {
    var x =
    {
      "nombre" :nombre ,
      "apellido" : apellido,
      "tipoDocumento" : tipo,
      "numeroDocumento" : numero
    }

    return this.http.put('/api/conductor',x);
  }
  deleteConductor(id)
  {
    return this.http.delete('/api/conductor/'+id);
  }
  createConductor(nombre , apellido , tipo , numero)
  {
    var x =
    {
      "nombre" :nombre ,
      "apellido" : apellido,
      "tipoDocumento" : tipo,
      "numeroDocumento" : numero
    }

    return this.http.post('/api/conductor',x);
  }

  getRutas()
  {
    return this.http.get<Ruta[]>('/api/ruta');
  }
  putRuta(tipo , placas , SOAT)
  {
    var x =
    {
      "tipoVehiculo" :tipo ,
      "placas" : placas,
      "SOAT" : SOAT,
   
    }

    return this.http.put('/api/ruta',x);
  }
  deleteRuta(id)
  {
    return this.http.delete('/api/ruta/'+id);
  }
  createRutas(placas , SOAT , tipo)
  {
    var x =
    {
      "tipoVehiculo" :tipo ,
      "placas" : placas,
      "SOAT" : SOAT,
    }

    return this.http.post('/api/ruta',x);
  }
  getAsignaciones()
  {
    return this.http.get<Asignacion[]>('/api/asignacion');
  }
  desasignar(asignacion)
  {
    return this.http.post('/api/desasignar',asignacion);
  }
  asignar(conductorID,rutaID,x1,y1,x2,y2,pasajero,empresa)
  {
    var x = 
    {
      "conductorID" : conductorID ,
      "rutaID" : rutaID,
      "x1" : x1 ,
      "y1" : y1,
      "x2" : x2,
      "y2" : y2,
      "pasajero" : pasajero,
      "empresa" : empresa
    }
    return this.http.post('/api/asignar',x);
  }

  cerrar()
  {
    return this.http.get('/api/cerrar');
  }

  getRegistros()
  {
    return this.http.get<Registro[]>('/api/obtenerLogs');
  }

}
