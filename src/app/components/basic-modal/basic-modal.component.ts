import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-basic-modal',
    templateUrl: './basic-modal.component.html',
    styleUrls: ['./basic-modal.component.scss']
  })
export class BasicModalComponent {
  @Input() title: string | null = null;
  @Input() content: string | null = null;

  constructor(public activeModal: NgbActiveModal) {}
}
