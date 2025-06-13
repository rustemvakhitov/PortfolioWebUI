export class Tag
{
    public constructor(public readonly key:string, public readonly color:string)
    {

    }

    toString()
    {
        return this.key;
    }
}