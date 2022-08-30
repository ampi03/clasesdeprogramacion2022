import { Injectable } from '@angular/core';

/* IMPORTACIONES DEL FIRESTORE*/
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Libro } from '../models/libro';
import { map } from "rxjs/operators"
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  /* TODO LO DE ABAJO ES DEL FIRESTORE*/
  private libroCollection:AngularFirestoreCollection<Libro>

  constructor(private db:AngularFirestore) { 
    this.libroCollection = db.collection('libros')

  }

  obtenerLibros(){
    return this.libroCollection.snapshotChanges().pipe(map(action=>action.map(a=>a.payload.doc.data())))
  }

  /* clase del miercoles*/
  crearLibro(nuevolibro:Libro){
    return new Promise(async (resolve,reject)=>{

      try{
        const id = this.db.createId();
        nuevolibro.idLibro = id;
        const resultado = await this.libroCollection.doc(id).set(nuevolibro);
        resolve(resultado);
      }
      catch(error){
        reject(error);
      }
    })
    const id = this.db.createId();
    nuevolibro.idLibro = id;

    this.libroCollection.doc(id).set(nuevolibro);
  }
  
  modificarLibro( idLibro:string, nuevaData:Libro){
    return this.db.collection('libros').doc(idLibro).update(nuevaData)
  }

  /** OPCION DEL BOTON ELIMINAR CARD */
  eliminarLibro(idLibro:string){
    return new Promise((resolve, reject)=>{
      try{
        const resp = this.libroCollection.doc(idLibro).delete()
        resolve(resp)
      }
      catch(error){
        reject(error)
      }
    })
  }
}
