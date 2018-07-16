import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

    lat: number ;
    lng: number ;

    @Input() lat1: number ;
    @Input() lng1: number ;
    @Input() lat2: number ;
    @Input() lng2: number ;

  constructor() { }

  lugar(event) 
  {
   this.lat = event.coords.lat ;
   this.lng = event.coords.lng ;
  }

  ngOnInit() {
  }

}
