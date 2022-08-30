import { Component } from '@angular/core';

/* IMPORTACIONES DEL FIRESTORE*/
import { LibroService } from './servicios/libro.service';
import { Libro } from './models/libro';
import { FormControl, FormGroup, Validators } from '@angular/forms';


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

  /** boton de abajo que pone agregar el formulario */
  agregarLibro(){
    if(this.libro.valid){
      let nuevolibro:Libro = {
        titulo:this.libro.value.titulo!,
        autor: this.libro.value.autor!,
        editorial:this.libro.value.editorial!,
        ISBN:this.libro.value.ISBN!,
        idLibro:"",
      }
      this.servicioLibro.crearLibro(nuevolibro).then((libro)=>{
        alert("el libro fue agregado")
      })
  
      .catch((error)=>{
        alert("el libro no pudo ser cargado\nError:"+error)
        
      })
    }
    else{
      alert("el formulario no está completo")
    }
  }
  modalVisible: boolean=false;
  
   /** botones del formulario que te permiten EDITAR */
  mostrarDialogo(){
    this.modalVisible = true;
    this.textoBoton = "Agregar Libro";
  }

  libro = new FormGroup({
    titulo: new FormControl('', Validators.required),
    autor: new FormControl('', Validators.required),
    editorial: new FormControl('', Validators.required),
    ISBN: new FormControl(0, Validators.required),
  })

  editarLibro(){
    let datos:Libro = {
      titulo:this.libro.value.titulo!,
      autor: this.libro.value.autor!,
      editorial:this.libro.value.editorial!,
      ISBN:this.libro.value.ISBN!,
      idLibro:this.libroSeleccionado.idLibro
    }
    this.servicioLibro.modificarLibro(this.libroSeleccionado.idLibro,datos).then((libro)=>{
      alert("El libro fue modificado con exito")
    })
    .catch((error)=>{
      alert("No se pudo modificar el libro\nError:"+error)
    })
  }

  mostrarEditar(libroSeleccionado:Libro){
    this.libroSeleccionado = libroSeleccionado;
    this.textoBoton = "Editar Libro"
    this.modalVisible = true
    this.libro.setValue({
      titulo:libroSeleccionado.titulo,
      autor:libroSeleccionado.autor,
      editorial:libroSeleccionado.editorial,
      ISBN:libroSeleccionado.ISBN
    })
  }

  cargarDatos(){
    if(this.textoBoton==="Agregar Libro"){
      this.agregarLibro()
    }
    else if(this.textoBoton==="Editar Libro"){
      this.editarLibro()
    }
    this.modalVisible = false;
    this.libro.reset();
  }
  libroSeleccionado:Libro;
  textoBoton:string;
  
  /** ELIMINAR OPCION */
  eliminarVisible:boolean = false;


  
}
