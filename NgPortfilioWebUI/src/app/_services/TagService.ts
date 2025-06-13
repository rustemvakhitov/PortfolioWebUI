import { inject, Injectable } from "@angular/core";
import { Project } from "../_models/Project";
import { Tag } from "../_models/Tag";
import { HttpClient, httpResource } from "@angular/common/http";
import { lastValueFrom, Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class TagService
{
    private httpClient = inject(HttpClient);
    //private httpResource = inject(httpResource);
    private tags:Map<string, string> = new Map<string, string>;
    private data:any;
    constructor(){
        this.tags = new Map<string, string>();
    };

    

    GetTags(): Map<string, string>
    {
        if (this.tags.size === 0)
        {
            this.CallApiAWait();
        }

        return this.tags; 
    }

    async CallApiAWait()
    {
        const res = this.CallApi();

        var tags:Tag[] = await lastValueFrom(res);

        tags.forEach(
            tag => {console.log(this.tags.set(tag.key, tag.color));}
        );
    }

    CallApi(): Observable<Tag[]>
    {
        return this.httpClient.get<Tag[]>("https://net-portfolio-api.rustemvakhitov.com/api/Tags");
    }
}