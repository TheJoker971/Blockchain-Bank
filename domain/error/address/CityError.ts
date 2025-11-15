export class CityError extends Error {
    constructor(message:string) {
        super(message);
        this.name = "CityError";
    }
}