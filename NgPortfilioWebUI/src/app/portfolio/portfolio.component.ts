import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Component({
  selector: 'app-portfolio',
  standalone: false,
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  public project: Project = {
    id:0,
    name: 'Sample Project',
    synopsis:'Project Short Description',
    description:'we dont have to show it now',
    projectRepositoryLink:'',
    pictures: [],
    tags:[Tag.ANGULAG,Tag.ASWFargate, Tag.DOTNET]
  }

  constructor(private titleService: Title){

    this.titleService.setTitle('Portfolio');
  }
}
