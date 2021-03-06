import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


import { LoginComponent } from "./auth/pages/login/login.component";
import { RegistroComponent } from "./auth/pages/registro/registro.component";


import { BuscarComponent } from "./tienda/pages/buscar/buscar.component";
import { HomeComponent } from "./tienda/pages/home/home.component";

import { CarritoComponent } from "./tienda/pages/carrito/carrito.component";
import { CategoriaComponent } from "./tienda/pages/categoria/categoria.component";
import { ProductosComponent } from "./tienda/pages/productos/productos.component";
import { VerProductoComponent } from "./tienda/pages/ver-producto/ver-producto.component";



const routes:Routes=[
  {
    path:'',
    component: HomeComponent,
    pathMatch:'full'
},
  {
      path:'login',
      component: LoginComponent,
  },
  {
      path:'producto',
      component: ProductosComponent
  },
  {
    path:'producto/:id',
    component: VerProductoComponent
},
  {
      path:'registro',
      component: RegistroComponent
  },
  {
    path:'buscar',
    component: BuscarComponent
  },
  {
    path:'categoria',
    component: CategoriaComponent
  },
  {
    path:'carrito',
    component: CarritoComponent
  },
  {
      path:'**',
      redirectTo:''
  }
]

@NgModule({
  declarations:[],
  imports:[
    RouterModule.forRoot(routes)
],
  exports:[RouterModule],
})

export class AppRoutingModule{}