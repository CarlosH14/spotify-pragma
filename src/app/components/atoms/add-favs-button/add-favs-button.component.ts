import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Single } from 'src/app/models/single.model';
import { SpotifyService } from '../../../services/spotify.service';

@Component({
  selector: 'app-add-favs-button',
  templateUrl: './add-favs-button.component.html',
  styleUrls: ['./add-favs-button.component.sass']
})
export class AddFavsButtonComponent {

  @Input() song: Single;

  @Input() areFavorite:boolean;

  @Output() newItemEvent = new EventEmitter<boolean>();

  constructor(public spotify:SpotifyService){

  }

  addFavorite(song:Single){
    console.log(song)
    this.areFavorite = true;
    this.spotify.saveTrack(song.songId).subscribe();
  }

  addNewItem() {
    this.newItemEvent.emit(this.areFavorite);
  }
}
