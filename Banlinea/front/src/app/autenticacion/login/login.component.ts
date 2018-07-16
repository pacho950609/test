import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../servicios.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username : string ;
  password : string ;
  mensaje : string ;
  

  constructor(private service: ServiciosService, private router : Router) 
  {

  }

  signIn()
  {
    console.log(this.username, this.password);
    this.service.Login(this.username,this.password).subscribe(ress=>
    {
      if(ress['isAuthenticated']==true)
      {
        this.router.navigate(['/home/conductores']);
      }
      else
      {
        this.username="";
        this.password="";
        this.mensaje = "contraseña o usuario incorrecto"
      }
    });
       

  }

  ngOnInit() {
  }

}
