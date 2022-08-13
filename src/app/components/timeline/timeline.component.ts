import {Component, Input, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
import {BasicModalComponent} from '../basic-modal/basic-modal.component';
import {TranslateService} from '@ngx-translate/core';
import {Subscription} from 'rxjs';
import {TimelineEntry} from '../../../assets/config/timeline/timeline.config';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  mouseOvered?: number;
  faBriefcase = faBriefcase;
  language?: 'nl' | 'en';

  @Input()
  timelineEntries: TimelineEntry[] = [];

  languageSub?: Subscription;

  constructor(private modalService: NgbModal,
              private translate: TranslateService) {
  }

  ngOnInit() {
    this.languageSub = this.translate.onLangChange.subscribe(() => {
      // note: this `as` is no guarantee. It's hard to type this globally, out of scope for my purposes.
      // it's here to lock the implemented/supported types of this component.
      this.language = this.translate.currentLang as 'nl' | 'en';
    });
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
  }

  openModal(timelineEntry: TimelineEntry): void {
    const modalRef = this.modalService.open(BasicModalComponent);
    modalRef.componentInstance.title = timelineEntry.title;
    modalRef.componentInstance.content = timelineEntry[this.language ?? 'en'].longDescription;
  }

  getItemDescription(item: TimelineEntry): string {
    return item[this.language ?? 'en'].description;
  }
}
