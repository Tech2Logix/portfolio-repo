import {Component} from '@angular/core';
import {faCar, faDownload, faEnvelope, faHome, faUser} from '@fortawesome/free-solid-svg-icons';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.scss']
})
export class TitlebarComponent {
  faUser = faUser;
  faEnvelope = faEnvelope;
  faHome = faHome;
  faCar = faCar;
  faDownload = faDownload;

  constructor(private translateService: TranslateService) {
  }

  selectLang(lang: 'en' | 'nl'): void {
    this.translateService.use(lang);
  }
}
