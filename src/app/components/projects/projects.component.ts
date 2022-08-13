import {Component, Input} from '@angular/core';
import {Project} from '../../../assets/config/projects/projects.config';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TranslateService} from '@ngx-translate/core';
import {ProjectModalComponent} from '../project-modal/project-modal.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  @Input()
  projects: Project[] = [];

  constructor(private modalService: NgbModal,
              private translate: TranslateService) {
  }

  openModal(project: Project): void {
    const modalRef = this.modalService.open(ProjectModalComponent);
    modalRef.componentInstance.src = project.src;
    modalRef.componentInstance.title = project.title;
    modalRef.componentInstance.company = project.company;
    modalRef.componentInstance.role = project.role;
    modalRef.componentInstance.technology = project.technology;

    if (this.translate.currentLang === 'nl') {
      modalRef.componentInstance.description = project.descriptionNl;
    } else {
      modalRef.componentInstance.description = project.descriptionEn;
    }
  }
}
