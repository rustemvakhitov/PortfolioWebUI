import { Injectable } from "@angular/core";
import { Project } from "../_models/Project";
import { Tag } from "../_models/Tag";

@Injectable({
    providedIn: 'root'
})

export class TagService
{
    tags:Map<string, Tag>;

    constructor(){

        this.tags = new Map<string, Tag>();

        this.tags.set('Angular', new Tag('Angular', 'blue'));
        this.tags.set('bootstrap', new Tag('bootstrap', 'lightblue'));
        this.tags.set('.Net', new Tag('.Net', 'green'));
        this.tags.set('DynamoDB', new Tag('DynamoDB', 'orange'));
        this.tags.set('GitHub', new Tag('GitHub', 'red'));
        this.tags.set('GitLab', new Tag('GitLab', 'red'));
        this.tags.set('IaC', new Tag('IaC', 'lightblue'));
        this.tags.set('AWS CDK', new Tag('AWS CDK', 'orange'));
        this.tags.set('ASW Fargate', new Tag('ASW Fargate', 'orange'));
        this.tags.set('ASW EC2', new Tag('ASW EC2', 'orange'));
        this.tags.set('ASW S3', new Tag('ASW S3', 'orange'));
        this.tags.set('ASW ECR', new Tag('ASW ECR', 'orange'));
        this.tags.set('ASW ECS', new Tag('ASW ECS', 'orange'));
        this.tags.set('AWS Elastic Load Balancer', new Tag('AWS Elastic Load Balancer', 'orange'));
        this.tags.set('CI/CD', new Tag('CI/CD', 'orange'));
        this.tags.set('AWS Route 53', new Tag('AWS Route 53', 'orange'));
    };

    

    GetTags()
    {
        if (this.tags === undefined)
        {
            //call web api

            return this.tags; // just for now
        }

        return this.tags; // call WebApi or use caches value
    }
}