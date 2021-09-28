import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../interfaces/categoria.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  categoria!: Categoria;

  constructor(private http:HttpClient) {
    this.cargarCategorias();

   }

   cargarCategorias(){
     this.http.get('assets/data/categorias.json')
     .subscribe((respuesta:Categoria)=>{
       console.log(respuesta);
       this.categoria=respuesta;
       console.log(this.categoria)


     })
   }
}
