import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../spotify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-access-token',
  templateUrl: './access-token.component.html',
  styleUrls: ['./access-token.component.sass']
})
export class AccessTokenComponent implements OnInit {

  constructor(private spotify: SpotifyService, private route: Router) {
    const refererURL = sessionStorage.getItem('refererURL');
    if(refererURL){

      sessionStorage.removeItem('refererURL');
      window.location.href = refererURL

    }else{

      this.route.navigate(['/']);

    }
  }

  ngOnInit(): void {
  }

}
