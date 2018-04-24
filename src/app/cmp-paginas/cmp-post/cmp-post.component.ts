import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cmp-post',
  templateUrl: './cmp-post.component.html',
  styleUrls: ['./cmp-post.component.css']
})
export class CmpPostComponent implements OnInit {
  usuario = {
    usuario : "",
    email : "",
    password : ''
  };

  constructor() { }

  ngOnInit() {
  }

  enviarDatos(datos: NgForm) {
    console.log(datos);

  }
}
