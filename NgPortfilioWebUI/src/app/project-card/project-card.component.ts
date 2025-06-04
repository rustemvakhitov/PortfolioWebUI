import { Component, Input } from '@angular/core';
import { Project } from '../_models/Project';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';
import { Tag } from '../_models/Tag';
import { TagService } from '../_services/TagService';

@Component({
  selector: 'app-project-card',
  standalone: false,
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() project = {} as Project;

  bsModalRef?:BsModalRef;

  tags = {} as Map<string,Tag>;

  constructor(private modalService: BsModalService, private tagService: TagService)
  {

  }

  OpenProjectModal()
  {
    const modalOptions:ModalOptions = {
      class:"modal-lg",
      initialState: {
        project:this.project,
        tags:this.tags
      }
    };
    this.bsModalRef = this.modalService.show(ProjectModalComponent,modalOptions);
  }

  ngOnInit(): void 
  {
    this.tags = this.tagService.GetTags();
  }
}
