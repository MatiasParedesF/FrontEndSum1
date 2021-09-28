import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { ListaProducto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styles: [
  ]
})

export class ProductosComponent implements OnInit {
  
  productos!: ListaProducto;

  getProducto(){
    this.productoService.getProducto().subscribe((productos)=>{
      this.productos=productos;
    })
  }

  constructor(private productoService: ProductoService) {
    this.getProducto();
  }
  
  ngOnInit(): void{
    
  }



}
