import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { ListaProducto, Producto } from '../../interfaces/producto.interface';
import { ProductoCarrito } from '../../interfaces/carrito.interface';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styles: [
  ]
})

export class ProductosComponent implements OnInit {
 
  productos!: ListaProducto;
  carrito:ProductoCarrito[]=[];
  _productoCarrito!:ProductoCarrito;
  contador:number=0;


  getProducto(){
    this.productoService.getProducto().subscribe((productos)=>{
      this.productos=productos;
    })
  }

  public agregarProductoCarrito(producto:Producto):void {
    if(this.carrito.length==0){
      this._productoCarrito = {id:producto.id,nombre:producto.nombre, precio:producto.precio, img:producto.img,cantidad:1};
      this.carrito.push(this._productoCarrito);
      producto.stock--;
    }
    else{
        const resultado=this.carrito.find(productoC=>productoC.id===producto.id);
        if(resultado){
          for(var a=0;a<this.carrito.length;a++){

            if( this.carrito[a].id==producto.id){
                  this.carrito[a].cantidad++;
                  producto.stock--;
            }
          }

        }
        else{
          this._productoCarrito = {id:producto.id,nombre:producto.nombre, precio:producto.precio, img:producto.img,cantidad:1};
          this.carrito.push(this._productoCarrito);
          producto.stock--
          console.log("El producto aun no esta en el carrito")
        }
    
    }

  }

  constructor(private productoService: ProductoService) {
    this.getProducto();
  }
  
  ngOnInit(): void{
    
  }



}
