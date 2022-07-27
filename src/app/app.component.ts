import {Component} from '@angular/core';
import {faCog, faHeart} from '@fortawesome/free-solid-svg-icons';
import {horizontalTimelineEntries} from 'src/assets/config/horizontal-timeline/timeline.config';
import {preferences} from 'src/assets/config/preferences/preferences.config';
import {skills} from 'src/assets/config/skills/skills.config';
import { timelineEntries } from 'src/assets/config/timeline/timeline.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faCog = faCog;
  faHeart = faHeart;
  preferences = preferences;
  timelineEntries = timelineEntries;
  horizontalTimelineEntries = horizontalTimelineEntries;
  skills = skills;
}
