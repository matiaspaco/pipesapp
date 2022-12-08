import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html'
})
export class BasicosComponent{
    nombreLower: string = 'matias';
    nombreUpper: string = 'MATIAS';
    nombreCompleto: string = 'mAtIaS pAco vIscARra';
    fecha: Date = new Date();
}
