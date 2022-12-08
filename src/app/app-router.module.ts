import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { BasicosComponent } from './Administration/pages/basicos/basicos.component';
import { NumerosComponent } from './Administration/pages/numeros/numeros.component';
import { NoComunesComponent } from './Administration/pages/no-comunes/no-comunes.component';
import { OrdenarComponent } from './Administration/pages/ordenar/ordenar.component';

const routes: Routes = [{
path: '',
component: BasicosComponent,
pathMatch: 'full'
},
{
  path: 'numeros',
  component: NumerosComponent,
},
{
  path:'no-comunes',
  component: NoComunesComponent
},
{
  path:'ordenar',
  component: OrdenarComponent
},
{
  path:'**',
  redirectTo:''
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  // exports: [
  //   RouterModule
  // ]
})
export class AppRouterModule { }
