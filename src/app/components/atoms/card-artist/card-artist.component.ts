import { Component, Input } from '@angular/core';
import { AddedBy } from 'src/app/models/single.model';

@Component({
  selector: 'app-card-artist',
  templateUrl: './card-artist.component.html',
  styleUrls: ['./card-artist.component.sass']
})
export class CardArtistComponent {
  @Input() artists: AddedBy[];
}
