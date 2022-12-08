import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  //values for i18nSelect
  nombre: string = 'Matias';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino' : 'invitarlo',
    'femenino'  : 'invitarla'
  }

  //values for i18nPlural

  clientes: string[] = ['Paulina', 'Mariano', 'Leonardo', 'Hernando', 'Miguel'];

  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos # cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente(){
    //se debe cambiar el nombre del cliente y el genero
    this.nombre = 'Paulina';
    this.genero = 'femenino';
  }

  borrarCliente(){
    this.clientes.pop();
  }

  persona = {
    nombre:'Matias',
    edad:27,
    direccion:'Bolivar 1011'
  }

  heroes = [
    {
      nombre: 'Superman',
      vuela:true
    },
    {
      nombre: 'Robin',
      vuela:false
    },
    {
      nombre: 'Aquaman',
      vuela:false
    },
  ]

  miObservable = interval(1000);

  respuestaPromesa = new Promise( (resolve, reject) => {
    setTimeout(()=>{
      resolve('Respuesta de la promesa resuelta.');
    }, 3500);
  });

}
