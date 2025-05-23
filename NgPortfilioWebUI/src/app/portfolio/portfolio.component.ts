import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectService } from '../_services/ProjectService';

@Component({
  selector: 'app-portfolio',
  standalone: false,
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {


  projects = {} as Project[];

  constructor(private titleService: Title , private projectService: ProjectService)
  {
    this.titleService.setTitle('Portfolio');
  }

  
  ngOnInit(): void 
  {
    this.projects = this.projectService.GetProjects();
  }

  
}
