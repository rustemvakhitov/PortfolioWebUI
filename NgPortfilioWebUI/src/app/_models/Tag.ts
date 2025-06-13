export class Tag
{

    static readonly ANGULAG = new Tag('Angular', 'blue');
    static readonly BOOTSRAP = new Tag('bootstrap', 'lightblue');
    static readonly DOTNET = new Tag('.Net', 'green');
    static readonly DYNAMODB = new Tag('.Net', 'orange');
    
    static readonly GitHub = new Tag('GitHub', 'red');
    static readonly GitLab = new Tag('GitLab', 'red');
    static readonly IaC = new Tag('IaC', 'lightblue');
    static readonly AWSCDK = new Tag('AWS CDK', 'orange');
    static readonly ASWFargate = new Tag('ASW Fargate', 'orange');
    static readonly ASWEC2 = new Tag('ASW EC2', 'orange');
    static readonly ASWS3 = new Tag('ASW EC2', 'orange');
    static readonly AWSElasticLB = new Tag('AWS Elastic Load Balancer', 'orange');
    static readonly CICD = new Tag('CI/CD', 'orange');
    static readonly AWSRoute53 = new Tag('AWS Route 53', 'orange');
    

    public constructor(public readonly key:string, public readonly color:string)
    {

    }

    toString()
    {
        return this.key;
    }
}