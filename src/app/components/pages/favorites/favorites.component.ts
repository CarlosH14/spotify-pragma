import { Component } from '@angular/core';
import { SpotifyService } from '../../../services/spotify.service';
import { Single } from 'src/app/models/single.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.sass']
})
export class FavoritesComponent {

  songs: Single[]
  constructor(public spotify:SpotifyService){
    this.songs = this.spotify.getAllSongs()
    .filter(song => song.isFavorite)
    
  }

}
