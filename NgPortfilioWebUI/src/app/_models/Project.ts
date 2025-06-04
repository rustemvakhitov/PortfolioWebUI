import { Tag } from "./Tag";

export interface Project{
    id: number;
    name: string;
    synopsis:string;
    description:string;
    projectRepositoryLink:string;
    pictures:string[];
    tags:string[]; // tag keys
}