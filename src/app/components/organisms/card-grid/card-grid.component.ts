import { Component, Input } from '@angular/core';
import { Single } from 'src/app/models/single.model';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.sass']
})
export class CardGridComponent {

  @Input() songs: Single[]

  @Input() areFavorites: boolean[]
}
