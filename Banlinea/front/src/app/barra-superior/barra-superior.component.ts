import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../servicios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.scss']
})
export class BarraSuperiorComponent implements OnInit {

   nombreUsuario : string ;
    
  constructor(private service: ServiciosService, private router: Router) 
  {
    this.service.islog().subscribe(ress => 
    {
      console.log(ress);
      if(!ress['isAuthenticated'])
      {
        this.router.navigate(['/autenticacion']);
      }
      else
      {
        this.nombreUsuario= ress['username'];
      }
    });
  }

  logOut()
  {
    this.service.cerrar().subscribe(ress=>{
      this.router.navigate(['/autenticacion']);
    })
  }

  ngOnInit() {
  }

}


