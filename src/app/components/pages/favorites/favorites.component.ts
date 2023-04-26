import { Component } from '@angular/core';
import { SpotifyService } from '../../../services/spotify.service';
import { Single } from 'src/app/models/single.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.sass']
})
export class FavoritesComponent {

  songs: Single[] = [];
  ids: string[] = [];

  areFavorites: boolean[] = [];

  error: boolean = false;
  mensajeError?: string;

  constructor(private spotify :SpotifyService){
    this.spotify.getFavoritesSongs().subscribe((data: any[]) => {
      console.log(data)
      this.ids = data.map(item => item.track.id);
      this.songs = data.map(item => new Single(item.track.id, item.track.name, item.track.artists, item.track.album.images[0].url, true))
      this.spotify.checkSavedTrack(this.ids).subscribe( (data:any) => {
        this.areFavorites = data;
      });

    }, (errorServicio)=> {
      this.error = true;
      this.mensajeError = errorServicio.error.error.message;
      console.log(errorServicio);
    });
  }

}
