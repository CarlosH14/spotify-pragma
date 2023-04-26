import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeButtonComponent } from './components/atoms/home-button/home-button.component';
import { FavsButtonComponent } from './components/atoms/favs-button/favs-button.component';
import { LogoutButtonComponent } from './components/atoms/logout-button/logout-button.component';
import { CardComponent } from './components/molecules/card/card.component';
import { CardImageComponent } from './components/atoms/card-image/card-image.component';
import { CardSongComponent } from './components/atoms/card-song/card-song.component';
import { CardArtistComponent } from './components/atoms/card-artist/card-artist.component';
import { AddFavsButtonComponent } from './components/atoms/add-favs-button/add-favs-button.component';
import { NavbarButtonsComponent } from './components/molecules/navbar-buttons/navbar-buttons.component';
import { SongInfoComponent } from './components/molecules/song-info/song-info.component';
import { NavbarComponent } from './components/organisms/navbar/navbar.component';
import { CardGridComponent } from './components/organisms/card-grid/card-grid.component';
import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FavoritesComponent } from './components/pages/favorites/favorites.component';
import { SongComponent } from './components/pages/song/song.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SpotifyService } from './services/spotify.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AccessTokenComponent } from './services/auth/access-token/access-token.component';
import { DeleteFavsButtonComponent } from './components/atoms/delete-favs-button/delete-favs-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeButtonComponent,
    FavsButtonComponent,
    LogoutButtonComponent,
    CardComponent,
    CardImageComponent,
    CardSongComponent,
    CardArtistComponent,
    AddFavsButtonComponent,
    NavbarButtonsComponent,
    SongInfoComponent,
    NavbarComponent,
    CardGridComponent,
    LoginComponent,
    HomeComponent,
    FavoritesComponent,
    SongComponent,
    AccessTokenComponent,
    DeleteFavsButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [SpotifyService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
