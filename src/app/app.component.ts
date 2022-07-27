import { Component } from '@angular/core';
import { faCog, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faCog = faCog;
  faHeart = faHeart;
}
