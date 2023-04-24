import { SongsResponse } from './../models/tracks.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Single } from '../models/single.model';
import { Track } from '../models/tracks.model';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  public credentials = {
    clientId : "c4200060223046dcaba50a927df28bbd",
    clientSecret : "4b2351ad772749c9af8f8b30331830a4",
    accessToken : "BQA4fblh1Ua5h-F7WYInrBxyWDAbIqIJLdIxH3JAi0xk2eeKJFe-JQusHuSVg7jfJ9bHdw_xYJzwN0sfK2p4DgwZ6mJ5BCSenP-RG2-0RGLVUjqLZr8EkLk15NdSoeRJNsnw",
    userId : "317yzdodeuf5mchij57i5osp33dm",
    userToken : ""
  }

  public songs: Single[] = [];

  constructor(private http: HttpClient) { }

  private getNewToken(){
    this.http.post("https://accounts.spotify.com/api/token","grant_type=client_credentials&client_id="+this.credentials.clientId+"&client_secret="+this.credentials.clientSecret, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    })
    .subscribe((data:any) => {this.credentials.accessToken = data.access_token; localStorage.setItem('token', data.access_token)});
    return this.credentials.accessToken;
  }

  isUserLogged(): boolean {
    if (localStorage.getItem('token') !=null) {
      return true;
    }else{
      return false;
    }
   }

  getAllSongs(){

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer ' + this.credentials.accessToken
    });

    this.http.get<SongsResponse>('https://api.spotify.com/v1/playlists/37i9dQZF1DX9CCxc3fffni/tracks', {headers})
    .subscribe(resp => {
      resp.items.forEach(item => this.songs.push(new Single(item.track.name, item.track.artists, item.track.album.images[0].url, false)))
    }
      );

    return this.songs;

  }

  getSong( songId:string){
    this.getNewToken();

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer ' + localStorage.getItem('token')
    });

    return this.http.get(`https://api.spotify.com/v1/tracks/${ songId }`, {headers});

  }

  // getFavoritesSongs() {
  //   return this.favoritas;
  // }

  // saveNewFavorite(songId: any){
  //   this.favoritas.push(songId);
  //   this.favoritas = this.favoritas.filter((item,index)=>{
  //     return this.favoritas.indexOf(item) === index;
  //   })
  // }

  // deleteFavorite(songId: any){
  //   this.favoritas = this.favoritas.filter(song => song != songId);
  // }

}
