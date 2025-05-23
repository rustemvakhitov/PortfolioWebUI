import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectService } from '../_services/ProjectService';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  featuredProject = {} as Project;

  constructor(private titleService: Title, private projectService: ProjectService)
  {
    this.titleService.setTitle('Home');
  }

  ngOnInit(): void 
  {
    this.featuredProject = this.projectService.GetProject(0);
  }
}
