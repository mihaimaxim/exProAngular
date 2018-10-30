export class Access {

    public name: string;
    public imagePath: string;

    constructor(
        paramName: string,
        paramImagePath: string
    ) {
        this.name = paramName;
        this.imagePath = paramImagePath;
    }
}
