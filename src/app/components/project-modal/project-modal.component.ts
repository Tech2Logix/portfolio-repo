import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-project-modal',
    templateUrl: './project-modal.component.html',
    styleUrls: ['./project-modal.component.scss']
  })
export class ProjectModalComponent {
  @Input() src: string | null = null;
  @Input() title: string | null = null;
  @Input() company: string | null = null;
  @Input() role: string | null = null;
  @Input() technology: string | null = null;
  @Input() description: string | null = null;

  constructor(public activeModal: NgbActiveModal) {}
}
