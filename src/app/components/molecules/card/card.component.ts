import { Component, Input, Output } from '@angular/core';
import { Single } from 'src/app/models/single.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent {

  @Input() song :Single;

  @Input() areFavorite:boolean;

  newFavorite:boolean = false;

  addNewFavorite(){
    this.newFavorite=true;
    this.areFavorite = this.newFavorite
  }

}
