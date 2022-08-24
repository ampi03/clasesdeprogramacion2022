import { Component } from '@angular/core';

/* IMPORTACIONES DEL FIRESTORE*/
import { LibroService } from './servicios/libro.service';
import { Libro } from './models/libro';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imagenes:string[]=[
    "../../../assets/img/fondonosotros.png",
    "../../../assets/img/fondonosotros.png",
    "../../../assets/img/fondonosotros.png"

  ];
  title = 'pasteleria';

  /* es el padre, se puede poner el codigo de abajo en cualquier lugar. ejemplo, inicio*/
  coleccionDeLibros:Libro[]
  constructor(private servicioLibro:LibroService) { 
    

  }
  

  ngOnInit(): void {

    this.servicioLibro.obtenerLibros()
    .subscribe(libro=>this.coleccionDeLibros=libro)

  }

  /** CLASE DEL MIERCOLES */
  agregarLibro(){
    let nuevolibro: Libro = {
      titulo:"el gato con botas",
      editorial: "salamandra",
      autor: "Juan Caceres",
      ISBN: 52642366326723743,
      idLibro: ""
    }
    this.servicioLibro.crearLibro(nuevolibro).then((libro)=>{
      
    })
  }


  
}
