import { Component } from '@angular/core';
import { User } from './interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  users:User[]=[
    {nombre: "Miguel Ángel", apellidos:"Bonilla Fernández", edad:22, fav:false},
    {nombre: "Irene", apellidos:"Paniagua Cobos", edad:21, fav:true},
    {nombre: "Rafael", apellidos:"Moncayo Pérez", edad:21, fav:false},
    {nombre: "David", apellidos:"Hormigo Ramírez", edad:44, fav:false},
    {nombre: "Maria", apellidos:"Sánchez Peralta", edad:72, fav:true},
    {nombre: "Dahila", apellidos:"Aguilar López", edad:0, fav:true}
  ];

  
}
