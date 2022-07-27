import {Component, OnInit} from '@angular/core';
import {faCar, faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.scss']
})
export class TitlebarComponent implements OnInit {
  faUser = faUser;
  faEnvelope = faEnvelope;
  faHome = faHome;
  faCar = faCar;

  constructor() {
  }

  ngOnInit() {
    console.log("did init titlebar..?")
  }

}
