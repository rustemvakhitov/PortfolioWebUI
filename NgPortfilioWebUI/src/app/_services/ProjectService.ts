import { inject, Injectable } from "@angular/core";
import { Project } from "../_models/Project";
import { Tag } from "../_models/Tag";
import { lastValueFrom, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ProjectService{

    private httpClient = inject(HttpClient);
    projects: Project[] = [];
    
    constructor(){}

    GetProjects():Observable<Project[]>
    {
         return this.httpClient.get<Project[]>("https://net-portfolio-api.rustemvakhitov.com/api/Projects");
    }

    GetProject(id:number):Observable<Project>
    {
        return this.httpClient.get<Project>(`https://net-portfolio-api.rustemvakhitov.com/api/Projects/${id}`);
    }
}