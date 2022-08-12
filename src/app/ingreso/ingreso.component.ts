import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoServicio } from './ingreso.servicio';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  constructor(private ingresoServicio:IngresoServicio) { }

  ingresos:Ingreso[]=[];



  ngOnInit(): void {
    this.ingresos = this.ingresoServicio.ingreso;
  }

  eliminarRegistro(ingreso:Ingreso){
    this.ingresoServicio.eliminar(ingreso);
  }

}
