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
import { SeeMoreButtonComponent } from './components/atoms/see-more-button/see-more-button.component';
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
    SeeMoreButtonComponent,
    NavbarButtonsComponent,
    SongInfoComponent,
    NavbarComponent,
    CardGridComponent,
    LoginComponent,
    HomeComponent,
    FavoritesComponent,
    SongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
