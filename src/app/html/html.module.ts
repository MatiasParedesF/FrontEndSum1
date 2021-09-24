import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { SectionComponent } from './section/section.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    SectionComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    SectionComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HtmlModule { }
