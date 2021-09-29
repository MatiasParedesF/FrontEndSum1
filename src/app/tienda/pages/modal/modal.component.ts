import { Component, Input, OnInit } from '@angular/core';
import { ProductoCarrito } from '../../interfaces/carrito.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styles: [
  ]
})
export class ModalComponent implements OnInit {

  @Input() Carrito: ProductoCarrito[]=[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
