export class PriceError extends Error {

    constructor(message:string) {
        super(message);
        this.name = "PriceError";
    }
}