import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { FavoritesComponent } from './components/pages/favorites/favorites.component';
import { SongComponent } from './components/pages/song/song.component';
import { LoginComponent } from './components/pages/login/login.component';

export const routes: Routes = [

  {path: 'home', component:HomeComponent},
  {path: 'favorites', component:FavoritesComponent},
  {path: 'song/:id', component: SongComponent},
  {path: 'login', component: LoginComponent},
  {path: '', pathMatch: 'full', redirectTo:'home'},
  {path: '**', pathMatch: 'full', redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
