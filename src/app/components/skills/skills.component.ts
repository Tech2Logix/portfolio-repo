import {Component, Input} from '@angular/core';
import {Skill} from '../../../assets/config/skills/skills.config';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  @Input()
  skills: Skill[] = [];
}
