export class AddressLineError extends Error {
    constructor(message:string) {
        super(message);
        this.name = "AddressLineError";
    }
}