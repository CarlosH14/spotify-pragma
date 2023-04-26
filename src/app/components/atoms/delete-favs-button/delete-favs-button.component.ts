import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Single } from 'src/app/models/single.model';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-delete-favs-button',
  templateUrl: './delete-favs-button.component.html',
  styleUrls: ['./delete-favs-button.component.sass']
})
export class DeleteFavsButtonComponent {
  @Input() song: Single;

  @Input() areFavorite:boolean;
  deleted: boolean = false;

  @Output() newItemEvent = new EventEmitter<boolean>();

  constructor(public spotify:SpotifyService){
  }

  deleteFavorite(song:Single){
    console.log(song)
    this.areFavorite = false;
    this.spotify.deleteSavedTrack(song.songId).subscribe();
  }

  addNewItem() {
    this.newItemEvent.emit(this.areFavorite);
  }

  refresh(): void { window.location.reload(); }

  notify(deleted:boolean){
    this.deleted=deleted;
  }

}
