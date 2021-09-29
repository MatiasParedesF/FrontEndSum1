import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsideComponent } from './components/aside/aside.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { HomeComponent } from './pages/home/home.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ConstruccionComponent } from './pages/construccion/construccion.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { VerProductoComponent } from './pages/ver-producto/ver-producto.component';





@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    ProductosComponent,
    HomeComponent,
    BuscarComponent,
    ConstruccionComponent,
    CategoriaComponent,
    CarritoComponent,
    VerProductoComponent
  ],
  exports: [
    LoginComponent,
    RegistroComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class TiendaModule { }
