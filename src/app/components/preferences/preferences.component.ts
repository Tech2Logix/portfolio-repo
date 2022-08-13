import {Component, Input} from '@angular/core';
import {Preference} from '../../../assets/config/preferences/preferences.config';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent {

  @Input()
  preferences: Preference[] = [];

  // support up to 7 balloons/preferences!
  readonly paddingLocations = [
    [10.5, 2],
    [5, 1],
    [1, 6.5],
    [19, 11],
    [22, 3],
    [10, 11],
    [25, 13],
  ];

}
