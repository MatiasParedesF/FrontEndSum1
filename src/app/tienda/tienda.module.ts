import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsideComponent } from './components/aside/aside.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    ProductosComponent,
    HomeComponent
  ],
  exports: [
    LoginComponent,
    RegistroComponent,
    HeaderComponent,
    FooterComponent,
    AsideComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TiendaModule { }
