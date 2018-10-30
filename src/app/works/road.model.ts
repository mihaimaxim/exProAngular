export class Road {

    public name: string;
    public imagePath: string;
    public description: string;

    constructor(
        paramName: string,
        paramImagePath: string,
        paramDescription: string
    ) {
        this.name = paramName;
        this.imagePath = paramImagePath;
        this.description = paramDescription;
    }
}
