import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { FavoritesComponent } from './components/pages/favorites/favorites.component';
import { SongComponent } from './components/pages/song/song.component';
import { LoginComponent } from './components/pages/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AccessTokenComponent } from './services/auth/access-token/access-token.component';

export const routes: Routes = [

  {path: 'home', component:HomeComponent, canActivate: [AuthGuardService]},
  {path: 'favorites', component:FavoritesComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent},
  { path: "access_token", component: AccessTokenComponent},
  {path: '', pathMatch: 'full', redirectTo:'home'},
  {path: '**', pathMatch: 'full', redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
