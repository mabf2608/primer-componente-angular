import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent  implements OnInit {

  @Input() nombre: string="";
  @Input() apellidos: string="";
  @Input() edad: number=0;

  constructor() { }

  ngOnInit() {}

  onCardClick(){
    console.log(`La tarjeta de ${this.nombre} ha sido clickeada`)
  }

}
