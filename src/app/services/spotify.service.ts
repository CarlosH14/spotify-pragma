import { SongsResponse } from './../models/tracks.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Single } from '../models/single.model';
import { Track } from '../models/tracks.model';
import { map } from 'rxjs';
import { __values } from 'tslib';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  public credentials = {
    clientId : "c4200060223046dcaba50a927df28bbd",
    clientSecret : "4b2351ad772749c9af8f8b30331830a4",
    accessToken : "",
    // userId : "317yzdodeuf5mchij57i5osp33dm",
    // userToken : ""
  }

  public poolURLS = {

    authorize: 'https://accounts.spotify.com/es-ES/authorize?client_id=' +
      this.credentials.clientId + '&response_type=token' +
      '&redirect_uri=' + encodeURIComponent('http://localhost:4200/callback') +
      '&expires_in=3600&scope=user-library-read%20user-library-modify',
    refreshAccessToken: 'https://accounts.spotify.com/api/token'


  };

  upDateToken(){
    this.credentials.accessToken = sessionStorage.getItem('token') || '';
  }

  getQuery(query:string){
    const URL = `https://api.spotify.com/v1/${query}`;
    const HEADERS = {headers : new HttpHeaders({
      'Authorization' : 'Bearer ' + this.credentials.accessToken
    })};

    return this.http.get(URL, HEADERS)
  }

  putQuery(query:string, BODY: string){
    const URL = `https://api.spotify.com/v1/${query}`;
    const HEADERS = {headers : new HttpHeaders({
      'Authorization' : 'Bearer ' + this.credentials.accessToken
    })};

    console.log(BODY)

    return this.http.put(URL, BODY ,HEADERS)
  }

  deleteQuery(query:string, BODY: string){
    const URL = `https://api.spotify.com/v1/${query}`;
    const HEADERS = {headers : new HttpHeaders({
      'Authorization' : 'Bearer ' + this.credentials.accessToken
    }), body: BODY};

    console.log(BODY)

    return this.http.delete(URL,HEADERS)
  }

  checkTokenSpoLogin(){
    this.checkTokenSpo() || (sessionStorage.setItem('refererURL', location.href), window.location.href = this.poolURLS.authorize)
  }

  checkTokenSpo(){
    return !!this.credentials.accessToken;
  }

  tokenRefreshURL(){
    this.checkTokenSpo() && alert('Expiró la sesión');

    this.credentials.accessToken = '';
    sessionStorage.removeItem('token');
    this.checkTokenSpoLogin();
  }

  constructor(private http: HttpClient) {
    this.upDateToken();
  }

  getFavoritesSongs(){
    return this.getQuery("me/tracks")
      .pipe(map( (data: any) => data.items));
  }

  getPlaylistSongs(){
    return this.getQuery("playlists/37i9dQZF1DX9CCxc3fffni/tracks?limit=50")
      .pipe(map( (data: any) => data.items));

  }

  saveTrack(id:string){
    return this.putQuery("me/tracks", `["${id}"]`);
  }

  checkSavedTrack(id:string[]){
  return this.getQuery(`me/tracks/contains?ids=${id}`)
  .pipe(map( (data: any) => data));;
  }

  deleteSavedTrack(id:string){
    return this.deleteQuery("me/tracks", `["${id}"]`);
  }

}
