import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { NosotrosComponent } from './nosotros/nosotros.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    ContactoComponent,
    NosotrosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
