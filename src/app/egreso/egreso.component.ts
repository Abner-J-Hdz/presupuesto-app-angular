import { Component, Input, OnInit } from '@angular/core';
import { Ingreso } from '../ingreso/ingreso.model';
import { IngresoServicio } from '../ingreso/ingreso.servicio';
import { Egreso } from './egreso.model';
import { EgresoServicio } from './egreso.servicio';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  constructor(private egresoServicio:EgresoServicio) { }

  egresos:Egreso[]=[];

  @Input() ingreoTotal: number;

  ngOnInit(): void {
    this.egresos = this.egresoServicio.egreso;
  }

  eliminarEgreso(egreso:Egreso){
    this.egresoServicio.eliminar(egreso)
  }

  calcularPorcentaje(egreso: Egreso){
    return egreso.valor / this.ingreoTotal;
  }

}
