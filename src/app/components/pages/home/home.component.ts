import { Component } from '@angular/core';
import { SpotifyService } from '../../../services/spotify.service';
import { Single } from 'src/app/models/single.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  songs: Single[] = [];

  constructor(private spotify :SpotifyService){
    this.songs = this.spotify.getAllSongs();
  }



}
