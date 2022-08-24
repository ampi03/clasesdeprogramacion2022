import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title ='Menubar';

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items=[
      {
        label:"Inicio",
        icon:"pi pi-home",
        routerLink:"/inicio"
      },
      {
        label:"Nosotros",
        icon:"pi pi-home",
        routerLink:"/nosotros"
      },
      {
        label:"Contacto",
        icon:"pi pi-user",
        routerLink:"/contacto"
      },
    ]
  }

}
