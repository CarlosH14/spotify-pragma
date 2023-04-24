import { Component, Input } from '@angular/core';
import { Single } from 'src/app/models/single.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent {

  @Input() song :Single;

}
