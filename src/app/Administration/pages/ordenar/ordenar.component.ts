import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css']
})
export class OrdenarComponent implements OnInit {

  enMayusculas: boolean = false;
  ordenarPor: string = '';
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onMayusculas(){
    // if (this.enMayusculas === true) {
    //   this.enMayusculas = false
    // } else {
    //   this.enMayusculas = true
    // }
    //this.enMayusculas ? this.enMayusculas = false : this.enMayusculas = true;
    this.enMayusculas = !this.enMayusculas;
  }
  // aVuelo: boolean = false;
  // onVolador(){
  //   // if (this.enMayusculas === true) {
  //   //   this.enMayusculas = false
  //   // } else {
  //   //   this.enMayusculas = true
  //   // }
  //   //this.enMayusculas ? this.enMayusculas = false : this.enMayusculas = true;
  //   this.aVuelo = !this.aVuelo;
  // }

  cambiarOrden( valor: string){
    this.ordenarPor = valor;
    console.log(valor)
  }

}
