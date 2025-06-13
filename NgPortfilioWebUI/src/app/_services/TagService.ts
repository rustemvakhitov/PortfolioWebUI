import { inject, Injectable } from "@angular/core";
import { Project } from "../_models/Project";
import { Tag } from "../_models/Tag";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { httpResource } from "@angular/common/http";


@Injectable({
    providedIn: 'root'
})

export class TagService
{
    private httpClient = inject(HttpClient);
    private tags:Map<string, string> = new Map<string, string>;
    private data:any;
    constructor(){

        

  
        this.tags = new Map<string, string>();

        this.tags.set('Angular', 'blue');
        this.tags.set('bootstrap','lightblue');
        this.tags.set('.Net','green');
        this.tags.set('DynamoDB', 'orange');
        this.tags.set('GitHub','red');
        this.tags.set('GitLab','red');
        this.tags.set('IaC', 'lightblue');
        this.tags.set('AWS CDK', 'orange');
        this.tags.set('ASW Fargate', 'orange');
        this.tags.set('ASW EC2', 'orange');
        this.tags.set('ASW S3', 'orange');
        this.tags.set('ASW ECR', 'orange');
        this.tags.set('ASW ECS', 'orange');
        this.tags.set('AWS Elastic Load Balancer', 'orange');
        this.tags.set('CI/CD','orange');
        this.tags.set('AWS Route 53', 'orange');
    };

    

    GetTags()
    {
        /*if (this.tags.size === 0)
        {
            //call web api
            //let data = this.httpClient.get("https://net-portfolio-api.rustemvakhitov.com/api/Tags");

            .subscribe(response => {this.data = response;});

            let i = 1;
        }*/

        //let t = httpResource<any>("https://net-portfolio-api.rustemvakhitov.com/api/Tags");

        this.httpClient.get<Tag[]>("https://net-portfolio-api.rustemvakhitov.com/api/Tags").subscribe(
            arrayOfTags=>
            {
                arrayOfTags.forEach(element => {
                    this.tags.set(element.key,element.color);
                });
            }
        ); 

        return this.tags;//
    }
}