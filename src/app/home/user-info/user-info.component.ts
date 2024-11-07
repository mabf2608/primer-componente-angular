import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserInfoFavClicked } from '../interfaces/userfav';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})

export class UserInfoComponent implements OnInit {

  @Input() nombre: string="";
  @Input() apellidos: string="";
  @Input() edad: number=0;
  @Input() fav: boolean=false;

  @Output() onFavClicked:EventEmitter<UserInfoFavClicked> = new EventEmitter<UserInfoFavClicked>();
  constructor() { }

  ngOnInit() {

  }

  onCardClick(){
    console.log(`La tarjeta de ${this.nombre} ha sido clickeada`)
  }

  onFavClick(){
    this.fav = !this.fav;
  }

}
