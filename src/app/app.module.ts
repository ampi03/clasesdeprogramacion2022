import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {DialogModule} from 'primeng/dialog';

import { MenubarModule } from 'primeng/menubar';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ImageModule} from 'primeng/image';
import { CarouselComponent } from './componentes/carousel/carousel.component';


import {CarouselModule} from 'primeng/carousel';
import {AngularFireModule} from '@angular/fire/compat';

import { environment } from 'src/environments/environment';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    FooterComponent,
    NosotrosComponent,
    ContactoComponent,
    CarouselComponent,
    
    
  ],
  imports: [
    BrowserModule,
    ImageModule,
    AppRoutingModule,
    MenubarModule,
    CarouselModule,
    CardModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
