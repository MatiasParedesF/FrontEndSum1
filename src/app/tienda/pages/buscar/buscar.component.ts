import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {
  Fecha: number=new Date().getTime();
  Fecha1: string = formatDate(new Date(),'dd/MM/yyyy', 'en');
  Fecha2: string = formatDate(new Date(),'dd/MM/yyyy', 'en');
  Mes: number = new Date().getMonth()+1;
  dia: number = new Date().getDay();
  nuevoDia:string="";
  Dia:number|null=null;
  Titulo:String="Curso de Basico de Angular";
  mostrar:boolean = false;
  eliminado:null|string|undefined='';


  day : string[] =["Domingo", "Lunes", "Miercoles", "Jueves", "Viernes", "Sabado"];

  n:string = this.day[this.dia];
  get getDiaNumber():number|null {
    return this.Dia;
  }
  get getMes():number {
    return this.Mes;
  }
  guardarDia(){
    this.day.push(this.nuevoDia);
  }
  insertar():void {
    console.log("Metodo insertar");
  }
  insertar2(event:any):void {
    console.log(event);
  }
  Mostrar(mostrar:boolean){
    this.mostrar=mostrar

  }
  eliminarDia():void{ 
    this.eliminado=this.day.pop();
  }
  constructor() { }

  ngOnInit(): void {
  }

}
