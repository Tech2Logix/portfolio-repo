import {NgModule} from '@angular/core';
import {CircleComponent} from './circle/circle.component';
import {HorizontalTimelineComponent} from './horizontal-timeline/horizontal-timeline.component';
import {PreferencesComponent} from './preferences/preferences.component';
import {ProjectsComponent} from './projects/projects.component';
import {SkillsComponent} from './skills/skills.component';
import {TitlebarComponent} from './titlebar/titlebar.component';
import {TimelineComponent} from './timeline/timeline.component';
import {CommonModule} from '@angular/common';
import {BasicModalComponent} from './basic-modal/basic-modal.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [CircleComponent, HorizontalTimelineComponent, PreferencesComponent, ProjectsComponent, SkillsComponent, TitlebarComponent, TimelineComponent, BasicModalComponent],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    NgbModule,
    TranslateModule,
  ],
  exports: [CircleComponent, HorizontalTimelineComponent, PreferencesComponent, ProjectsComponent, SkillsComponent, TitlebarComponent, TimelineComponent, BasicModalComponent],
  providers: []

})
export class ComponentsModule {
}
