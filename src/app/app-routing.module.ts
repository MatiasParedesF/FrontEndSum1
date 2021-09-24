import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./tienda/pages/home/home.component";
import { LoginComponent } from "./tienda/pages/login/login.component";
import { ProductosComponent } from "./tienda/pages/productos/productos.component";
import { RegistroComponent } from "./tienda/pages/registro/registro.component";



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
      path:'registro',
      component:RegistroComponent
  },
  {
      path:'**',
      redirectTo:''
  }
]

@NgModule({
  exports:[RouterModule],
  imports:[
      RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule{}