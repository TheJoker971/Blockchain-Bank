export class IDError extends Error {
    constructor(message: string){
        super(message);
        this.name = "IDError";
    }
}