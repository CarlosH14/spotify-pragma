import { Component, Input } from '@angular/core';
import { Single } from 'src/app/models/single.model';

@Component({
  selector: 'app-add-favs-button',
  templateUrl: './add-favs-button.component.html',
  styleUrls: ['./add-favs-button.component.sass']
})
export class AddFavsButtonComponent {

  @Input() song: Single;

  addFavorite(song:Single){
    song.isFavorite=true
  }
}
