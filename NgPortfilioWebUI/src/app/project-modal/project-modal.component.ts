import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Component({
  selector: 'app-project-modal',
  standalone: false,
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css'
})
export class ProjectModalComponent {

  project = {} as Project;
  tags = {} as Map<string, Tag>;
  constructor(public bsModalRef: BsModalRef)
  {

  }
}
