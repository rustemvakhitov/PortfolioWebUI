
export class Project{
    id: number;
    key: string;
    name: string;
    synopsis:string;
    description:string;
    projectRepositoryLink:string;
    pictures:string[];
    tags:string[]; // tag keys

    constructor()
    {
        this.id = 0;
        this.key = "";
        this.name = "";
        this.synopsis = "";
        this.description = "";
        this.projectRepositoryLink= "";
        this.pictures =[];
        this.tags = []; // tag keys
    }
}