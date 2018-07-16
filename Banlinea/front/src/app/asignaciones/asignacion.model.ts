import {Ruta} from '../rutas/ruta.model';
import {Conductor} from '../conductores/conductor.model';

export class Asignacion 
{
    _id: string;
    conductorID : string;
		rutaID : string;
		x1 :string;
		y1 : string;
		x2 : string;;
		y2 : string;
		pasajero : string;
		empresa : string;
		conductor: Conductor;
		ruta : Ruta;
		estado : string;
  }