import { Component } from '@angular/core';
import { SpotifyService } from '../../../services/spotify.service';
import { Single } from 'src/app/models/single.model';
import { User } from 'src/app/models/user.model';
import { Track } from 'src/app/models/tracks.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent{

  songs: Single[] = [];
  ids: string[] = [];

  areFavorites: any[] = [];

  error: boolean = false;
  mensajeError?: string;

  constructor(private spotify :SpotifyService){
    this.spotify.getPlaylistSongs().subscribe((data: any[]) => {
      console.log(data)
      this.ids = data.map(item => item.track.id);
      this.songs = data.map(item => new Single(item.track.id, item.track.name, item.track.artists, item.track.album.images[0].url, false))
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
