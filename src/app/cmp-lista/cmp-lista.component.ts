import { Component, OnInit } from '@angular/core';
import {ItemsService} from '../../items.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-cmp-lista',
  templateUrl: './cmp-lista.component.html',
  styleUrls: ['./cmp-lista.component.css']
})
export class CmpListaComponent implements OnInit {

  items: Array<object>;
  constructor(private itemsService: ItemsService) { 
  }

  ngOnInit() {
    this.items = this.itemsService.getItems();
  }

  enviar(item){
    this.itemsService.emitirMensaje(item);
  }

}
