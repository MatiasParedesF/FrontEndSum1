import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListaProducto } from '../interfaces/producto.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) {
   }

    getProducto():Observable<ListaProducto>{
      const url='http://localhost:4200/assets/data/productos.json';
      return this.http.get<ListaProducto>(url);
   }
}
