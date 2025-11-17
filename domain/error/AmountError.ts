export class AmountError extends Error {

    constructor(message:string){
        super(message);
        this.name = "AmountError";
    }
}