export class StreetNumberError extends Error {

    constructor(message:string) {
        super(message);
        this.name = "StreetNumberError";
    }
}