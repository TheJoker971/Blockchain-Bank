export class PostalCodeError extends Error {
    constructor(message:string) {
        super(message);
        this.name = "PostalCodeError";
    }
}