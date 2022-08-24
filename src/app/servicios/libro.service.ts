import { Injectable } from '@angular/core';

/* IMPORTACIONES DEL FIRESTORE*/
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Libro } from '../models/libro';
import { map } from "rxjs/operators"

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
    return new Promise((resolve,reject)=>{

      try{
        const id = this.db.createId();
        nuevolibro.idLibro = id;
        const resultado = this.libroCollection.doc(id).set(nuevolibro);
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
}
