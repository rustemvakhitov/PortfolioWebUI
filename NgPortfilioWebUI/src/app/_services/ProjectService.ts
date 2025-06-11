import { Injectable } from "@angular/core";
import { Project } from "../_models/Project";
import { Tag } from "../_models/Tag";

@Injectable({
    providedIn: 'root'
})
export class ProjectService{

    constructor(){}

    projects: Project[] = [
        {id: 0, name: "Portfolio Web Site using Angular", 
            pictures: ["portfolio-image1.png", "diagram1.png", "portfolio-image2.png","portfolio-image3.png", "portfolio-image4.png"],
            projectRepositoryLink: "https://github.com/rustemvakhitov/PortfolioWebUI", 
            synopsis: "Angular 19 Front-End, .net WebApi, DynamoDB as storage for app data", 
            description: "The main purpose of this project is to show an ability of the developer to implement responsive lightweight Web UI and backend API using specified tech stack and also hosting another portfolio projects that prove dev's expertise in other areas", 
            tags: ['Angular', 'bootstrap', 'ASW Fargate', 'ASW ECR', 'AWS Elastic Load Balancer','ASW S3', 'DynamoDB', 'AWS Route 53', '.Net']},
        {id: 1, name: "Placeholder for Project #2", pictures: ["image1.png"], projectRepositoryLink: "//www.github.com", synopsis: "short description for Project #2", description: "Descriptuin #2", tags: ['Angular']},
        {id: 2, name: "Placeholder for Project #3", pictures: ["imahe1.png"], projectRepositoryLink: "//www.github.com", synopsis: "short description for Project #2", description: "Description #3", tags: ['.Net']}/*,
        {id: 3, name: "Web API Project", pictures: [], projectRepositoryLink: "//www.github.com", synopsis: "Web API Project that was developed for a class project.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.DOTNET]},
        {id: 4, name: "Chrome Extension", pictures: [], projectRepositoryLink: "//www.github.com", synopsis: "Developed a chrome extension that tracks the prices of furniture.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.DOTNET]},
        {id: 5, name: "Mobile App", pictures: [], projectRepositoryLink: "//www.github.com", synopsis: "Mobile app developed in java that tracks the departure and arrival of trains.", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: [Tag.DOTNET]}*/
    ];

    GetProjects()
    {
        return this.projects; // call WebApi
    }

    GetProject(id:number):Project
    {
        let project = this.projects.find(project => project.id === id);
        
        if (project === undefined)
        {
            throw new TypeError("there is no project with such ID" + id);
        }

        return project;
    }
}