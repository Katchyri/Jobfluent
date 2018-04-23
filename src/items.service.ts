
import { Injectable, EventEmitter, ElementRef, OnDestroy } from "@angular/core";
import { stringify } from "@angular/compiler/src/util";

@Injectable()
export class ItemsService {
emitirEvento;
items : Array<object>=[
  {imagen :"Imagen 1", titulo : " Titulo 1", descripcion : "Descripcion 1 del trabajo"},
  {imagen :"Imagne 2", titulo : " Titulo 2", descripcion : "Descripcion 2 del trabajo"},
  {imagen :"Imagne 3", titulo : " Titulo 3", descripcion : "Descripcion 3 del trabajo"},
  {imagen :"Imagne 4", titulo : " Titulo 4", descripcion : "Descripcion 4 del trabajo"},
  {imagen :"Imagne 5", titulo : " Titulo 5", descripcion : "Descripcion 5 del trabajo"}
];
  constructor() { 

    this.emitirEvento = new EventEmitter<string>();
  }

  getItems(){
    return this.items;
    }

  anadirItem(newItems){
    this.items.push(newItems);
  }

  emitirMensaje(nombre){
    this.emitirEvento.emit(nombre);
  }
  

}
