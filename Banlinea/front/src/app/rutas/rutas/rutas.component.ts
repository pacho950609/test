import { Component, OnInit } from '@angular/core';
import { Ruta } from '../ruta.model';
import { ServiciosService } from '../../servicios.service';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.scss']
})
export class RutasComponent implements OnInit {

  rutas : Ruta [] ;
  placas : string ;
  SOAT : string ;
  tipo : string ;



  constructor(private service: ServiciosService)
  {
    this.service.getRutas().subscribe(ress => 
      {
        this.rutas=ress;
      });
  }
 
  modificar(tipo, placas ,SOAT)
  {
    this.service.putRuta(tipo,placas,SOAT).subscribe(ress => 
      {
        alert("Modificado correctamente");
        this.service.getRutas().subscribe(ress => 
          {
            this.rutas=ress;
          });
      });
  }
  
  eliminar(id)
  {
    console.log("entra");
    this.service.deleteRuta(id).subscribe(ress => 
      {
        alert("Eliminado correctamente");
        this.service.getRutas().subscribe(ress => 
          {
            this.rutas=ress;
          });
      });
  }


  agregar()
  {
    this.service.createRutas(this.placas,this.SOAT,this.tipo).subscribe(ress => 
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
        
        this.service.getRutas().subscribe(ress => 
          {
            this.tipo="";
            this.placas="";
            this.SOAT = "" ;
            this.rutas=ress;
            
          });
      });

  }

  ngOnInit() {
  }

}
