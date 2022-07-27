import {Component, Input} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
import {BasicModalComponent} from '../basic-modal/basic-modal.component';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
  mouseOvered: number | null = null;
  faBriefcase = faBriefcase;

  @Input()
  timelineEntries: {
    flag: string;
    time: string;
    title: string;
    description: string;
    longDescription: string;
  }[] = [];


  constructor(private modalService: NgbModal) {
  }

  openModal(timelineEntry: any) {
    const modalRef = this.modalService.open(BasicModalComponent);
    modalRef.componentInstance.title = timelineEntry.title;
    modalRef.componentInstance.content = timelineEntry.longDescription;
  }
}
