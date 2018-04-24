
import { Injectable, EventEmitter, ElementRef, OnDestroy } from "@angular/core";
import { stringify } from "@angular/compiler/src/util";

@Injectable()
export class ItemsService {
emitirEvento;
items : Array<object>=[
  {imagen : "./assets/4.png", titulo : " Titulo 1", salario: "45.000 € - 60.000 € (0.0 - 0.3% stock)",  descripcion : "Descripcion 1 del trabajo"},
  {imagen :"./assets/1.png", titulo : " Titulo 2", salario: "45.000 € - 60.000 € (0.0 - 0.3% stock)", descripcion : "Descripcion 2 del trabajo"},
  {imagen :"./assets/2.png", salario: "45.000 € - 60.000 € (0.0 - 0.3% stock)", titulo : " Titulo 3", descripcion : "Descripcion 3 del trabajo"},
  {imagen :"./assets/3.png",  salario: "45.000 € - 60.000 € (0.0 - 0.3% stock)", titulo : " Titulo 4", descripcion : "Descripcion 4 del trabajo"},
  {imagen :"./assets/5.png",  salario: "45.000 € - 60.000 € (0.0 - 0.3% stock)",titulo : " Titulo 5", descripcion : "Descripcion 5 del trabajo"}
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
