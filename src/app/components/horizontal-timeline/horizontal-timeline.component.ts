import {AfterViewInit, Component, Input} from '@angular/core';
import {faGraduationCap, faSchool} from '@fortawesome/free-solid-svg-icons';
import {MediaObserver} from '@angular/flex-layout';
import {Subscription} from 'rxjs';
import {BasicModalComponent} from '../basic-modal/basic-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {HorizontalTimelineEntry} from '../../../assets/config/horizontal-timeline/timeline.config';

@Component({
  selector: 'app-horizontal-timeline',
  templateUrl: './horizontal-timeline.component.html',
  styleUrls: ['./horizontal-timeline.component.scss']
})
export class HorizontalTimelineComponent implements AfterViewInit {
  faGraduationCap = faGraduationCap;
  faSchool = faSchool;

  // Subscription of the observer of the screen size
  mediaQuery$: Subscription | null = null;

  // The active media query (xs | sm | md | lg | xl)
  activeMediaQuery: string | null = null;

  isSmallScreen = false;

  @Input()
  timelineEntries: HorizontalTimelineEntry[] = [];

  constructor(
    private mediaObserver: MediaObserver,
    private modalService: NgbModal) {
  }


  ngAfterViewInit() {
    // "need" to know if mobile/small screen or not in code.
    this.mediaQuery$ = this.mediaObserver.asObservable().subscribe((change) => {
      if (change !== null && change.length > 0) {
        // old: only showed 1 active change in array (highest prio)
        // now: seems to have array of active media queries, the one with highest prio is in 1st position
        this.activeMediaQuery = change[0].mqAlias;
        if (this.activeMediaQuery === 'xs' || this.activeMediaQuery === 'sm') {
          this.isSmallScreen = true;
        } else {
          this.isSmallScreen = false;
        }
      }
    });
  }

  openModal(index: number) {
    const modalRef = this.modalService.open(BasicModalComponent);
    modalRef.componentInstance.title = this.timelineEntries[index].title;
    modalRef.componentInstance.content = this.timelineEntries[index].description;
  }

  getClass(index: number, size: number): 'first' | 'mid' | 'end' {
    if (index == 0) {
      return 'first';
    }

    if (index === size) {
      return 'end';
    }

    return 'mid';
  }
}
