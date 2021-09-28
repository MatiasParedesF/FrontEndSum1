import { Component} from '@angular/core';
import { Categoria } from '../../interfaces/categoria.interface';
import { CategoriaService } from '../../services/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styles: [
  ]
})

export class CategoriaComponent  {

  categoria!:Categoria;

  

  constructor(private categoriaService: CategoriaService) {
    console.log(this.categoriaService.categoria)
    this.categoria=this.categoriaService.categoria;
   }

 


}
