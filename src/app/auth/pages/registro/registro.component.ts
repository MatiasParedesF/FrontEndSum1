import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  email: string='';
  clave:string='';
  claveConfirm:string='';
  nombre:string='';
  apellido:string='';
  constructor() { }

  ngOnInit(): void {
  }

  registrar():void{
    console.log("El email a registrar es: "+this.email);
    console.log("La clave a registrar es: "+this.email);
    console.log("La claveConfirm a registrar es: "+this.email);
    console.log("El nombre a registrar es: "+this.email);
    console.log("El apellido a registrar es: "+this.email);
  }
}
